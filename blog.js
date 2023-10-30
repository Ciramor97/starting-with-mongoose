const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    // uppercase: true,
    trim: true,
    minlength: 10,
    maxlength: 100,
    validate: {
      validator: (v) => v.charAt(0) === v.charAt(0).toUpperCase(),
      message: (props) => "The first character is not uppercase",
    },
  },
  content: String,
  isAchived: Boolean,
  numberOfRead: { type: Number, min: 0 },
  categories: { type: [String], enum: ["Discovery", "Tech", "Fly"] },
  featuredBlog: { type: mongoose.Types.ObjectId, ref: "Blog" },
  author: {
    name: String,
    address: String,
  },
  publishedDate: { type: Date, default: Date.now() },
});

blogSchema.methods.findSameCategories = function () {
  return mongoose.model("Blog").find({
    categories: { $in: this.categories },
  });
};

blogSchema.statics.find2FristBlog = function () {
  return mongoose.model("Blog").find().limit(2);
};

blogSchema.query.findNFristBlog = function (n) {
  return mongoose.model("Blog").find().limit(n);
};

blogSchema.virtual("readLabel").get(function () {
  return "Ce blog a été visualisé " + this.numberOfRead + " fois";
});

// middleware

blogSchema.post("save", function (doc, next) {
  console.log("After save", doc);
  next();
});
const model = mongoose.model("Blog", blogSchema);

module.exports = model;
