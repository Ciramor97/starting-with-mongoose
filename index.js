const mongoose = require("mongoose");
const Blog = require("./blog");

(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/testMongoose");

    console.log("connexion a la bd reussie");
    // const result = await Blog.create({
    //   title: "Title 12345",
    //   content: "Content 1",
    //   isAchived: "yes",
    //   numberOfRead: "1",
    //   categories: ["Fly", "Discovery"],
    //   featuredBlog: "653f92d6b7c1ceea2cfdbf06",
    //   author: {
    //     name: "Romaric MADEGNAN",
    //     address: "Lyon",
    //   },
    // });

    const blog = new Blog({
      title: "Voyage vers JESUS",
      content: "Content 1",
      isAchived: "yes",
      numberOfRead: "1",
      categories: ["Fly", "Discovery"],
      featuredBlog: "653f92d6b7c1ceea2cfdbf06",
      author: {
        name: "Romaric MADEGNAN",
        address: "Lyon",
      },
    });

    // const result = await blog.findSameCategories();
    // const result = await Blog.find2FristBlog();
    // const result = await Blog.find().findNFristBlog(2);

    // add custom properties to doc
    // const result = await Blog.findOne().where("numberOfRead").gt(0);

    // Middleware use case
    const result = await blog.save();

    // const result = await Blog.findById("653fc137f68f05dd7bfac35e").populate(
    //   "featuredBlog"
    // );

    // const result = await Blog.findById("653fc137f68f05dd7bfac35e")
    //   .sort({ title: 1 })
    //   .limit(2)
    //   .select("title content");
    // const result = await Blog.insertMany([
    //   {
    //     title: "Title 1",
    //     content: "Content 1",
    //   },
    //   {
    //     title: "Title 2",
    //     content: "Content 2",
    //   },
    // ]);

    // const result = await Blog.updateOne(
    //   {
    //     _id: "653fc137f68f05dd7bfac35e",
    //   },
    //   { $set: { content: "Content 1 Updated" } }
    // );
    // console.log(result);
    console.log(result.readLabel);
  } catch (error) {
    console.log(error.message);
  }
})();
