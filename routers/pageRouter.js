/**
 * Get express here...
 */
const express = require('express');
const path = require('path');
const { home,blog_fixed_image,blog_masonry_sidebar_left,blog_masonry_sidebar, blog_masonry,blog_sidebar_left,blog_sidebar,blog_single_sidebar_left,blog_single_sidebar,blog_single,blog,elements_accordions,elements_alerts,elements_bars,elements_buttons,elements_countdowns,elements_features,elements_forms,elements_grid,elements_icons,elements_media,elements_sliders,elements_tabs,elements_titles,elements_typography,home_architecture,home_fitness,home_landing,home_models,home_photography,home_restaurant,home_resume,index_02,index_2,index_03,index_04,index_op,index_op_01,index_op_02,index_op_03,index_op_04,page_404,page_about,page_about_2,page_careers,page_coming_soon,page_contact,page_contact_2,page_faq,page_login,page_pricing,page_services,page_services_2,portfolio_boxed_2col,portfolio_single_3,portfolio_boxed_3col,portfolio_single_1,portfolio_single_2,portfolio_wide_2col,portfolio_wide_3col,shop_2col,shop_3col,shop_4col,shop_cart,shop_checkout,shop_single,showSingleBlog, shop_single_data} = require('../controllers/pageController');

/**
 * Get router...
 */
const router = express.Router();

/**
 * Create routing system...
 */
router.get('/' , home);
router.get('/blog-fixed-image' , blog_fixed_image);
router.get('/blog-masonry-sidebar-left' , blog_masonry_sidebar_left);
router.get('/blog-masonry-sidebar' , blog_masonry_sidebar);
router.get('/blog-masonry' , blog_masonry);
router.get('/blog-sidebar-left' , blog_sidebar_left);
router.get('/blog-sidebar' , blog_sidebar);
router.get('/blog-single-sidebar-left' , blog_single_sidebar_left);
router.get('/blog-single-sidebar' , blog_single_sidebar);
router.get('/blog-single' , blog_single);
router.get('/blog/' , blog);
router.get('/blog-single/:id' , showSingleBlog);
router.get('/elements-accordions' , elements_accordions);
router.get('/elements-alerts' , elements_alerts);
router.get('/elements-bars' , elements_bars);
router.get('/elements-buttons' , elements_buttons);
router.get('/elements-countdowns' , elements_countdowns);
router.get('/elements-features' , elements_features);
router.get('/elements-forms' , elements_forms);
router.get('/elements-grid' , elements_grid);
router.get('/elements-icons' , elements_icons);
router.get('/elements-media' , elements_media);
router.get('/elements-sliders' , elements_sliders);
router.get('/elements-tabs' , elements_tabs);
router.get('/elements-titles' , elements_titles);
router.get('/elements-typography' , elements_typography);
router.get('/home-architecture' , home_architecture);
router.get('/home-fitness' , home_fitness);
router.get('/home-landing' , home_landing);
router.get('/home-models' , home_models);
router.get('/home-photography' , home_photography);
router.get('/home-restaurant' , home_restaurant);
router.get('/home-resume' , home_resume);
router.get('/index-02' , index_02);
router.get('/index-03' , index_03);
router.get('/index-04' , index_04);
router.get('/index-2' , index_2);
router.get('/index-op' , index_op);
router.get('/index-op-01' , index_op_01);
router.get('/index-op-02' , index_op_02);
router.get('/index-op-03' , index_op_03);
router.get('/index-op-04' , index_op_04);
router.get('/page-404' , page_404);
router.get('/page-about' , page_about);
router.get('/page-about-2' , page_about_2);
router.get('/page-careers' , page_careers);
router.get('/page-coming-soon' , page_coming_soon);
router.get('/page-contact' , page_contact);
router.get('/page-contact-2' , page_contact_2);
router.get('/page-faq' , page_faq);
router.get('/page-login' , page_login);
router.get('/page-pricing' , page_pricing);
router.get('/page-services' , page_services);
router.get('/page-services-2' , page_services_2);
router.get('/portfolio-boxed-2col' , portfolio_boxed_2col);
router.get('/portfolio-boxed-3col' , portfolio_boxed_3col);
router.get('/portfolio-single-1' , portfolio_single_1);
router.get('/portfolio-single-2' , portfolio_single_2);
router.get('/portfolio-single-3' , portfolio_single_3);
router.get('/portfolio-wide-2col' , portfolio_wide_2col);
router.get('/portfolio-wide-3col' , portfolio_wide_3col);
router.get('/shop-2col' , shop_2col);
router.get('/shop-3col' , shop_3col);
router.get('/shop-4col' , shop_4col);
router.get('/shop-cart' , shop_cart);
router.get('/shop-checkout' , shop_checkout);
router.get('/shop-single' , shop_single);
router.get('/shop-3col/:id' , shop_single_data);

/**
 * Export module here..
 */
module.exports = router;