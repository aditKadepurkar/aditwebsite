import os
from fastapi import FastAPI, HTTPException
# import psycopg2
import json
from api.main import app
from psycopg2 import connect, sql
from dotenv import load_dotenv
import os
from psycopg2.extras import RealDictCursor

# conn = psycopg2.connect(host = "localhost", dbname = "postgres", user="postgres", password = "1234", port = 8000)
load_dotenv('/Users/aditkadepurkar/Documents/dev/aditwebsite/api/.env')

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


# def db_put():
#     curr = conn.cursor()
#     curr.execute("""CREATE TABLE IF NOT EXISTS post(
#         id INT PRIMARY KEY,
#         text VARCHAR(255));
#         """)
#     conn.commit()
#     curr.close()
#     conn.close()



# post1 = {
#     "number": "1",
#     "title": "On Freedom.",
#     "body": "Testing updatesLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide!",
#     "date": "02-23-24"
# }

# post2 = {
#     "number": "2",
#     "title": "Title 2",
#     "body": "New scientific discovery announced! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices.",
#     "date": "02-23-24"
# }

# # Creating an array of posts
# posts = [post1, post2]

comment1 = {
    "number": "1",
    "user": "user1",
    "stars": "0",
    "body": "I agree with this! esting updatesLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet sho",
    "date": "02-23-24"
}

comment2 = {
    "number": "2",
    "user": "user2",
    "stars": "2",
    "body": "Wow!!",
    "date": "02-23-24"
}

comments = [comment1, comment2]


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

                print(posts[0].keys())
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
                    
                print(comments)

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

@app.post("/posts/{id}/comments/")
async def comment_post(id: int, text: str = ''):
    return {}

@app.put("/posts/{id}/comments/{comment_id}")
async def comment_edit(id: int, comment_id: int, text: str = ''):
    return {}

@app.delete("/posts/{id}/comments/{comment_id}")
async def comment_delete(id: int, comment_id: int):
    return {}


"""Projects"""

project1 = {
    "number": "1",
    "title": "Delphi",
    "authors": ["Adit Kadepurkar", "Matthew Xu"],
    "description": "Delphi makes using computers easier than every before!",
    "date": "08-21-24",
    "src": "/bg2.png",
    "github": "https://github.com/aditkadepurkar/delphi/",
}

project2 = {
    "number": "2",
    "title": "UFC Packet Parser",
    "authors": ["Adit Kadepurkar"],
    "description": "A SALAE logic analyzer script that parses UFC(Universal Flight Computer) packets for the UMN Rocket Team to analyze and debug their flight data.",
    "date": "01-21-24",
    "src": "/bg3.png",
    "github": "https://github.com/aditKadepurkar/UfcPktParser"
}

project3 = {
    "number": "2",
    "title": "Speech Hacks",
    "authors": ["Adit Kadepurkar, Matthew Xu"],
    "description": "orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide!",
    "date": "01-21-24",
    "src": "/bg3.png",
    "github": "https://github.com/mattx0601/SpeechHacks"
}

project4 = {
    "number": "4",
    "title": "IK-RRT CANADARM",
    "authors": ["Adit Kadepurkar, Kuba Kedzior, Thomas Weber"],
    "description": "T",
    "date": "01-21-24",
    "src": "/canadarm.png"
}

project5 = {
    "number": "5",
    "title": "WINGS",
    "authors": ["Adit Kadepurkar, Kuba Kedzior, Thomas Weber"],
    "description": "WOWWWWWWWWWWWWWWWWW",
    "date": "01-21-24",
    "src": "/wingslogo.png"
}

projects = [project1, project2, project3, project4, project5]


@app.get("/projects")
async def projects_all(sort: str = 'Recent'):
    return {json.dumps(projects)}

@app.get("/projects/featured")
async def projects_featured():
    return {json.dumps(projects[0])}

@app.post("/projects")
async def post_new(title: str = '', body: str = ''):
    return {}
