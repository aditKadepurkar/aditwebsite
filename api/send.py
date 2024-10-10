import psycopg2
from dotenv import load_dotenv
import os


load_dotenv()

# Database connection parameters
db_params = {
    'dbname': os.getenv('DB_NAME'),
    'user': os.getenv('DB_USER'),
    'password': os.getenv('DB_PASSWORD'),
    'host': os.getenv('DB_HOST'),
    'port': os.getenv('DB_PORT')
}

# Function to insert posts into the posts table
def insert_post(comment):
    try:
        # Establish connection
        connection = psycopg2.connect(**db_params)
        cursor = connection.cursor()

        # SQL INSERT statement
        insert_query = """
        INSERT INTO comments (comment_id, post_id, commenter, stars, comment_text, date) 
        VALUES (%s, %s, %s, %s, %s, %s);
        """

        # Data to insert from the post dictionary
        post_data = (comment["comment_id"], comment["post_id"], comment["commenter"], comment["stars"], comment["comment_text"], comment["date"])

        # Execute the INSERT statement
        cursor.execute(insert_query, post_data)

        # Commit the transaction
        connection.commit()

        print(f"Post '{comment['comment_id']}' inserted successfully!")

    except (Exception, psycopg2.Error) as error:
        print(f"Error while inserting post: {error}")

    finally:
        # Close the connection
        if connection:
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")


post1 = {
    "number": "1",
    "title": "Hello World.",
    "body": "Init blog",
    "date": "02-23-24"
}

post2 = {
    "number": "2",
    "title": "Test Post",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices.",
    "date": "02-23-24"
}



comment1 = {
    "comment_id": "1",
    "post_id": "2",
    "commenter": "user1",
    "stars": "0",
    "comment_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis ex quis odio porta tristique. Duis nisl nisl, pulvinar a justo in, rutrum faucibus turpis. Quisque sagittis risus vestibulum nisi sollicitudin rhoncus. Sed at sapien vitae turpis feugiat feugiat. Nulla placerat posuere porttitor. Donec pellentesque leo ac metus condimentum, in sollicitudin metus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum sem vitae dui fermentum, sed tempus dolor fringilla. Integer posuere erat vel gravida sagittis. Donec ac dolor interdum, pulvinar dui eu, tristique velit. Sed bibendum orci ut tortor scelerisque, vel vulputate sem ultricies. In ante turpis, accumsan non mollis sit amet, hendrerit vitae eros. Pellentesque tempor justo velit, vel pellentesque neque sagittis ac. Curabitur bibendum imperdiet metus, consectetur iaculis eros ultricies vel. Phasellus dapibus nunc in nisl congue, et suscipit justo ultrices. Internet sho",
    "date": "2024-10-10"
}

comment2 = {
    "comment_id": "2",
    "post_id": "1",
    "commenter": "user2",
    "stars": "2",
    "comment_text": "Wow!!",
    "date": "2024-10-10"
}




# Insert the posts
insert_post(comment1)
insert_post(comment2)


