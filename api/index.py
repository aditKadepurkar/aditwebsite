import os
from fastapi import FastAPI, HTTPException
# import psycopg2
import json
from api.main import app
from psycopg2 import connect, sql
from dotenv import load_dotenv
import os
from psycopg2.extras import RealDictCursor



load_dotenv('/home/ubuntu/dev/website/aditwebsite/api/.env')

db_params = {
    'dbname': os.getenv('DB_NAME'),
    'user': os.getenv('DB_USER'),
    'password': os.getenv('DB_PASSWORD'),
    'host': os.getenv('DB_HOST'),
    'port': os.getenv('DB_PORT')
}

# print(db_params["dbname"])

def get_db_connection():
    return connect(
        **db_params
    )


@app.get("/")
async def root():
    return {"message" : "Hello World"}

### Posts
@app.get("/posts")
async def posts_all(sort: str = 'Recent'):
    conn = None
    try:

        conn = get_db_connection()

        with conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cursor:

                if sort == 'Recent':
                    query = sql.SQL("SELECT * FROM posts ORDER BY date DESC")
                elif sort == 'Oldest':
                    query = sql.SQL("SELECT * FROM posts ORDER BY date ASC")
                else:
                    raise HTTPException(status_code=400, detail="Invalid sort parameter")

                cursor.execute(query)
                posts = cursor.fetchall()

                # print(posts[0].keys())
                for i in range(len(posts)):
                    if 'date' in posts[i] and posts[i]['date'] is not None:
                        posts[i]['date'] = posts[i]['date'].strftime('%Y-%m-%d')
                    posts[i].pop('created_at', None)
                    posts[i].pop('updated_at', None)

                


                return json.dumps(posts)

    except Exception as e:
        print(f"Error: {e}")  
        raise HTTPException(status_code=500, detail="An error occurred while fetching posts.")
    finally:
        if conn:
            conn.close()

@app.post("/posts")
async def post_new(title: str = '', body: str = ''):
    return {}

@app.get("/posts/{id}")
async def post_get(id: int):
    conn = None
    try:
        conn = get_db_connection()

        with conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cursor:

                query = sql.SQL("SELECT * FROM posts WHERE post_id = %s").format(sql.Identifier('id'))
                cursor.execute(query, (id,))
                
                post = cursor.fetchone()

                if post is None:
                    raise HTTPException(status_code=404, detail="Post not found")

                post.pop('created_at', None)
                post.pop('updated_at', None)
                
                
                # print(post)

                return json.dumps(post)

    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="An error occurred while fetching the post.")
    finally:
        if conn:
            conn.close()


@app.put("posts/{id}")
async def post_update(title: str = '', body: str = '', password: str = ''):
    return {}

@app.delete("posts/{id}")
async def post_delete(id: int):
    return {}

### Comments
@app.get("/posts/{id}/comments")
async def comments_all(id: int, sort: str = 'Recent'):
    conn = None
    try:
        conn = get_db_connection()

        with conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cursor:

                if sort == 'Recent':
                    query = sql.SQL("SELECT * FROM comments WHERE post_id = %s ORDER BY created_at DESC")
                elif sort == 'Oldest':
                    query = sql.SQL("SELECT * FROM comments WHERE post_id = %s ORDER BY created_at ASC")
                else:
                    raise HTTPException(status_code=400, detail="Invalid sort parameter")

                cursor.execute(query, (id,))
                comments = cursor.fetchall()

                for comment in comments:
                    # comment.pop('updated_at', None)
                    if 'date' in comment and comment['date'] is not None:
                        comment['date'] = comment['date'].strftime('%Y-%m-%d')
                    comment.pop('created_at', None)
                    
                # print(comments)

                return json.dumps(comments)

    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="An error occurred while fetching comments.")
    finally:
        if conn:
            conn.close()


@app.get("/posts/{id}/comments/{comment_id}")
async def comment_get(id: int, comment_id: int):
    return {}

from pydantic import BaseModel
class Comment(BaseModel):
    num: int
    name: str
    text: str

@app.post("/posts/{id}/comments/")
async def comment_post(id: int, comment: Comment):
    num = comment.num
    name = comment.name
    text = comment.text
    
    if name == '' or text == '':
        raise HTTPException(status_code=400, detail="Name and text are required fields.")
    
    # print(f"Name: {name}, Text: {text}")
    # posts the comment to the database
    conn = None
    try:
        conn = get_db_connection()

        with conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cursor:
                cursor.execute("SELECT COALESCE(MAX(comment_id), 0) + 1 AS new_comment_id FROM comments")
                new_comment_id = cursor.fetchone()["new_comment_id"]

                query = sql.SQL("INSERT INTO comments (comment_id, post_id, commenter, comment_text) VALUES (%s, %s, %s, %s)")
                cursor.execute(query, (new_comment_id, id, name, text))

                conn.commit()
                
                # return that it was successful
                return {"message": "Comment posted successfully."}

    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="An error occurred while posting the comment.")
    finally:
        if conn:
            conn.close()
    
    return {"message": "Comment failed to post."}

@app.put("/posts/{id}/comments/{comment_id}")
async def comment_edit(id: int, comment_id: int, text: str = ''):
    return {}

@app.delete("/posts/{id}/comments/{comment_id}")
async def comment_delete(id: int, comment_id: int):
    return {}

