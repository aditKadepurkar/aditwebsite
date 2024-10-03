import os
from fastapi import FastAPI
# import psycopg2
import json
from api.main import app

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



post1 = {
    "number": "1",
    "title": "On Freedom.",
    "body": "Testing updatesLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide!",
    "date": "02-23-24"
}

post2 = {
    "number": "2",
    "title": "Title 2",
    "body": "New scientific discovery announced! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices.",
    "date": "02-23-24"
}

# Creating an array of posts
posts = [post1, post2]

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
    return json.dumps(posts)

@app.post("/posts")
async def post_new(title: str = '', body: str = ''):
    return {}

@app.get("/posts/{id}")
async def post_get(id: int):
    return json.dumps(posts[id])

@app.put("posts/{id}")
async def post_update(title: str = '', body: str = '', password: str = ''):
    return {}

@app.delete("posts/{id}")
async def post_delete(id: int):
    return {}

### Comments
@app.get("/posts/{id}/comments")
async def comments_all(sort: str = 'Recent'):
    return comments

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
    "authors": ["Adit Kadepurkar"],
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
    "src": "/bg3.png"
}

project3 = {
    "number": "2",
    "title": "Speech Hacks",
    "authors": ["Adit Kadepurkar, Matthew Xu"],
    "description": "orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet shortages worldwide!",
    "date": "01-21-24",
    "src": "/bg3.png"
}

project4 = {
    "number": "4",
    "title": "TCool",
    "authors": ["Adit Kadepurkar"],
    "description": "T",
    "date": "01-21-24",
    "src": "/bg3.png"
}

project5 = {
    "number": "5",
    "title": "Project 5!!",
    "authors": ["Adit Kadepurkar"],
    "description": "WOWWWWWWWWWWWWWWWWW",
    "date": "01-21-24",
    "src": "/bg3.png"
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
