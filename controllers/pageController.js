/**
 * Get path module..
 */
const path = require('path');
const {readFileSync} = require('fs');

/**
 * Create routing system here..
 */
const home = (req,res) =>{
    res.render('index');
}
const blog_fixed_image = (req,res) =>{
    res.render('blog-fixed-image');
}
const blog_masonry_sidebar_left = (req,res) =>{
    res.render('blog-masonry-sidebar-left');
}
const blog_masonry_sidebar = (req,res) =>{
    res.render('blog-masonry-sidebar');
}
const blog_masonry = (req,res) =>{
    res.render('blog-masonry');
}
const blog_sidebar_left = (req,res) =>{
    res.render('blog-sidebar-left');
}
const blog_sidebar = (req,res) =>{
    res.render('blog-sidebar');
}
const blog_single_sidebar_left = (req,res) =>{
    res.render('blog-single-sidebar-left');
}
const blog_single_sidebar = (req,res) =>{
    res.render('blog-single-sidebar');
}
const blog_single = (req,res) =>{
    res.render('blog-single');
}
const blog = (req,res) =>{
    const post = readFileSync(path.join(__dirname,'../db/post.json'))
    res.render('blog',{
        post : JSON.parse(post.toString())
    });
}
const showSingleBlog = (req,res) =>{
    const post = JSON.parse(readFileSync(path.join(__dirname,'../db/post.json')));
    const single_post = post.find( data => data.id == req.params.id);
    res.render('blog-single',{
        for_single : single_post
    })
}
const elements_accordions = (req,res) =>{
    res.render('elements-accordions');
}
const elements_alerts = (req,res) =>{
    res.render('elements-alerts');
}
const elements_bars = (req,res) =>{
    res.render('elements-bars');
}
const elements_buttons = (req,res) =>{
    res.render('elements-buttons');
}
const elements_countdowns = (req,res) =>{
    res.render('elements-countdowns');
}
const elements_features = (req,res) =>{
    res.render('elements-features');
}
const elements_forms = (req,res) =>{
    res.render('elements-forms');
}
const elements_grid = (req,res) =>{
    res.render('elements-grid');
}
const elements_icons = (req,res) =>{
    res.render('elements-icons');
}
const elements_media = (req,res) =>{
    res.render('elements-media');
}
const elements_sliders = (req,res) =>{
    res.render('elements-sliders');
}
const elements_tabs = (req,res) =>{
    res.render('elements-tabs');
}
const elements_titles = (req,res) =>{
    res.render('elements-titles');
}
const elements_typography = (req,res) =>{
    res.render('elements-typography');
}
const home_architecture = (req,res) =>{
    res.render('home-architecture');
}
const home_fitness = (req,res) =>{
    res.render('home-fitness');
}
const home_landing = (req,res) =>{
    res.render('home-landing');
}
const home_models = (req,res) =>{
    res.render('home-models');
}
const home_photography = (req,res) =>{
    res.render('home-photography');
}
const home_restaurant = (req,res) =>{
    res.render('home-restaurant');
}
const home_resume = (req,res) =>{
    res.render('home-resume');
}
const index_2 = (req,res) =>{
    const slide = readFileSync(path.join(__dirname,'../db/homePageSlider.json'));
    const logo = readFileSync(path.join(__dirname,'../db/ourClientsLogo.json'));
    const testi = readFileSync(path.join(__dirname,'../db/testimonial.json'));
    const blogs = readFileSync(path.join(__dirname,'../db/blogs.json'));
    const portfolio = readFileSync(path.join(__dirname,'../db/portfolio.json'));
    res.render('index-2', {
        slide : JSON.parse(slide.toString()),
        logo : JSON.parse(logo.toString()),
        testi : JSON.parse(testi.toString()),
        blogs : JSON.parse(blogs.toString()),
        portfolio : JSON.parse(portfolio.toString())
    });
}
const index_02 = (req,res) =>{
    res.render('index-02');
}
const index_03 = (req,res) =>{
    res.render('index-03');
}
const index_04 = (req,res) =>{
    res.render('index-04');
}
const index_op_01 = (req,res) =>{
    res.render('index-op-01');
}
const index_op_02 = (req,res) =>{
    res.render('index-op-02');
}
const index_op_03 = (req,res) =>{
    res.render('index-op-03');
}
const index_op_04 = (req,res) =>{
    res.render('index-op-04');
}
const index_op = (req,res) =>{
    res.render('index-op');
}
const page_404 = (req,res) =>{
    res.render('page-404');
}
const page_about_2 = (req,res) =>{
    res.render('page-about-2');
}
const page_about = (req,res) =>{
    res.render('page-about');
}
const page_careers = (req,res) =>{
    res.render('page-careers');
}
const page_coming_soon = (req,res) =>{
    res.render('page-coming-soon');
}
const page_contact_2 = (req,res) =>{
    res.render('page-contact-2');
}
const page_contact = (req,res) =>{
    res.render('page-contact');
}
const page_faq = (req,res) =>{
    res.render('page-faq');
}
const page_login = (req,res) =>{
    res.render('page-login');
}
const page_pricing = (req,res) =>{
    res.render('page-pricing');
}
const page_services_2 = (req,res) =>{
    res.render('page-services-2');
}
const page_services = (req,res) =>{
    res.render('page-services');
}
const portfolio_boxed_2col = (req,res) =>{
    res.render('portfolio-boxed-2col');
}
const portfolio_boxed_3col = (req,res) =>{
    res.render('portfolio-boxed-3col');
}
const portfolio_single_1 = (req,res) =>{
    res.render('portfolio-single-1');
}
const portfolio_single_2 = (req,res) =>{
    res.render('portfolio-single-2');
}
const portfolio_single_3 = (req,res) =>{
    res.render('portfolio-single-3');
}
const portfolio_wide_2col = (req,res) =>{
    res.render('portfolio-wide-2col');
}
const portfolio_wide_3col = (req,res) =>{
    res.render('portfolio-wide-3col');
}
const shop_2col = (req,res) =>{
    res.render('shop-2col');
}

const shop_3col = (req,res) =>{
    const product = readFileSync(path.join(__dirname,'../db/product.json'))
    res.render('shop-3col',{
        product : JSON.parse(product.toString())
    });
}
const shop_single_data = (req,res) =>{
    const product = JSON.parse(readFileSync(path.join(__dirname,'../db/product.json')))
    const single_product = product.find( data => data.id == req.params.id);
    const for_data = readFileSync(path.join(__dirname,'../db/product.json'))
    res.render('shop-single',{
        single_product : single_product,
        latest : JSON.parse(for_data.toString())
    })
}
const shop_4col = (req,res) =>{
    res.render('shop-4col');
}
const shop_cart = (req,res) =>{
    res.render('shop-cart');
}
const shop_checkout = (req,res) =>{
    res.render('shop-checkout');
}
const shop_single = (req,res) =>{
    res.render('shop-single');
}

module.exports = {
    home,blog_fixed_image,blog_masonry_sidebar_left,blog_masonry_sidebar, blog_masonry,blog_sidebar_left,blog_sidebar,blog_single_sidebar_left,blog_single_sidebar,blog_single,blog,elements_accordions,elements_alerts,elements_bars,elements_buttons,elements_countdowns,elements_features,elements_forms,elements_grid,elements_icons,elements_media,elements_sliders,elements_tabs,elements_titles,elements_typography,home_architecture,home_fitness,home_landing,home_models,home_photography,home_restaurant,home_resume,index_02,index_2,index_03,index_04,index_op,index_op_01,index_op_02,index_op_03,index_op_04,page_404,page_about,page_about_2,page_careers,page_coming_soon,page_contact,page_contact_2,page_faq,page_login,page_pricing,page_services,page_services_2,portfolio_boxed_2col,portfolio_single_3,portfolio_boxed_3col,portfolio_single_1,portfolio_single_2,portfolio_wide_2col,portfolio_wide_3col,shop_2col,shop_4col,shop_cart,shop_checkout,shop_single,showSingleBlog,shop_3col,shop_single_data
};