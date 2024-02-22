import os
from fastapi import FastAPI
import psycopg2
import json

app = FastAPI()
# conn = psycopg2.connect(host = "localhost", dbname = "postgres", user="postgres", password = "1234", port = 8000)


# def db_put():
#     curr = conn.cursor()
#     curr.execute("""CREATE TABLE IF NOT EXISTS post(
#         id INT PRIMARY KEY,
#         text VARCHAR(255));
#         """)
#     conn.commit()
#     curr.close()
#     conn.close()

posts = {
    1 : ["Title 1", "Internet shortages worldwide!"]

}


@app.get("/")
async def root():
    return {"message" : "Hello World"}

### Posts
@app.get("/posts")
async def posts_all(sort: str = 'Recent'):
    return json.dumps(posts)

@app.post("/posts")
async def post_new(title: str = '', body: str = ''):
    return {}

@app.get("/posts/{id}")
async def post_get(id: int):
    return {}

@app.put("posts/{id}")
async def post_update(title: str = '', body: str = '', password: str = ''):
    return {}

@app.delete("posts/{id}")
async def post_delete(id: int):
    return {}

### Comments
@app.get("/posts/{id}/comments")
async def comments_all(sort: str = 'Recent'):
    return {}

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
