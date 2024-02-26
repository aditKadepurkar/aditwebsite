type post = {
  number: number;
  title: string;
  body: string;
  date: string;
};

type comment = {
  number: string;
  user: string;
  stars: number;
  body: string;
  date: string;
};

async function getData(num: number) {
  const res = await fetch(`http://0.0.0.0:7000/posts/${num - 1}`);
  const data: post = JSON.parse(await res.json());
  return data;
}
async function getComments(num: number) {
  const res = await fetch(`http://0.0.0.0:7000/posts/${num - 1}/comments`);
  const jsonString = await res.json();
  const jsonData: comment[] = jsonString;
  return jsonData;
}

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function format(text: string) {
  const month: string = months[Number(text.substring(0, 2)) - 1];

  return month + ` ${text.substring(3, 5)},` + ` 20${text.substring(6, 8)}`;
}

export default async function Home({ params: { post } }) {
  const comments: comment[] = await getComments(Number(post.substring(0, 1)));
  const postData: post = await getData(Number(post.substring(0, 1)));

  return (
    <div className="relative top-[12em]  mx-auto mb-8 mt-8 flex max-w-screen-lg flex-col rounded-xl bg-white p-4 shadow-2xl shadow-gray-900">
      <div className="flex px-10 py-5">
        <div className="p-4">
          <h1 className="justify-left flex py-3 text-3xl font-bold">
            {postData.title}
          </h1>
          <p className="py-5"> {format(postData.date)} </p>
          <p className="justify-left py-5 text-lg">{postData.body}</p>
        </div>
      </div>
      <div className="rounded-2xl bg-slate-300 p-3 pb-10">
        <h1 className="p-5 text-xl font-bold"> Comments </h1>
        <ul>
          {comments.map((comment) => (
            <li key={comment.number}>
              <div className="flex w-full  px-10 py-1">
                <div className="w-4/5 px-4">
                  <h1 className="text-lg font-semibold"> {comment.user} </h1>
                  <p className="text-base"> {comment.body} </p>
                </div>
                <div className="left-2 w-1/5 p-4">
                  <p className="text-sm"> {format(comment.date)} </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* This is where the comments will want to be loaded */}
      </div>
    </div>
  );
}
