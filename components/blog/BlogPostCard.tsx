const blogPosts = [
  {
    title: "10 Time Management Tips for Maximum Productivity",
    author: "Jane Doe",
    date: "June 15, 2022",
    description: "Learn how to organize your day efficiently and achieve more with these practical time management tips.",
    imageUrl: "https://images.pexels.com/photos/6894002/pexels-photo-6894002.jpeg",
  },
  {
    title: "The Power of Daily Routines",
    author: "John Smith",
    date: "June 10, 2022",
    description: "Discover how daily routines can boost your productivity and enhance your focus.",
    imageUrl: "https://images.pexels.com/photos/3944466/pexels-photo-3944466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "The Art of Prioritization",
    author: "Emily Brown",
    date: "June 5, 2022",
    description: "Learn how to prioritize tasks effectively to make the most of your time.",
    imageUrl: "https://images.pexels.com/photos/19916914/pexels-photo-19916914/free-photo-of-daisy-flowers-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Effective Goal Setting",
    author: "Michael Green",
    date: "June 1, 2022",
    description: "Learn the strategies for setting and achieving your goals effectively.",
    imageUrl: "https://images.pexels.com/photos/4065892/pexels-photo-4065892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function BlogPostList() {
  return (
    <div className="lg:grid md:grid md:grid-cols-2 lg:grid-cols-3  gap-4">
      {blogPosts.map((post, index) => (
        <div key={index} className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500">By {post.author} | {post.date}</p>
            <p className="mt-2">
              {post.description}
            </p>
            <div className="card-actions justify-start mt-4">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
