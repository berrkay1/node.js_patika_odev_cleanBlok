const Post = require("../modals/Post");

exports.indexPage = async (req,res)=> {
    const posts = await Post.find({});
    res.render("index",{
        posts
    });
}

exports.aboutPage = (req,res)=> {
    res.render("about");
}

exports.addPostPage = (req,res)=> {
    res.render("add_post");
}

exports.editPage = async(req,res) => {
    const post = await Post.findOne({_id:req.params.id});
    res.render('edit',{
        post
    })
}