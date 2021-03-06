const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');


app.use(compression());
app.use(require('prerender-node').set('prerenderToken', 'XbZD8vHKX3YxR4RBddrQ'));

app.get('*', function(req,res,next) {
    if(req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production'){
    return res.redirect(301,['https://', req.get('Host'), req.url].join(''));
    }
    else{
        next() /* Continue to other routes if we're not redirecting */
    }
    });

app.use(express.static(__dirname + '/dist'));

var port=process.env.PORT || 8080;

//Path Location Straegy
//var forceSsl = function (req, res, next) {/
  //  if (req.headers['x-forwarded-proto'] !== 'https') {
   //     return res.redirect(301,['https://', req.get('Host'), req.url].join(''));
   // }
   // return next();
 //};
 //env = process.env.NODE_ENV || 'development';


   // if (env === 'production') {
   ///     app.use(forceSsl);
 //   }

    // other configurations etc for express go here...

    


app.get('/sitemap',(req,res) => {

    const xml = '<?xml version="1.0" encoding="UTF-8"?><urlsetxmlns="http://www.sitemaps.org/schemas/sitemap/0.9"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">     <url> <loc>https://www.careernaksha.com/</loc> <changefreq>weekly</changefreq><lastmod>2020-02-27T07:05:32+00:00</lastmod> <priority>1.0</priority> </url> <url><loc>https://www.careernaksha.com/products</loc> <changefreq>weekly</changefreq> <lastmod>2020-02-27T07:05:32+00:00</lastmod> <priority>0.9</priority> </url><url><loc>https://www.careernaksha.com/about</loc><changefreq>weekly</changefreq><lastmod>2020-02-27T07:05:32+00:00</lastmod><priority>0.8</priority></url><url><loc>https://www.careernaksha.com/blogs</loc><changefreq>weekly</changefreq><lastmod>2020-02-27T07:05:32+00:00</lastmod><priority>0.7</priority></url><url><loc>https://www.careernaksha.com/gallery</loc><changefreq>weekly</changefreq><lastmod>2020-02-27T07:05:32+00:00</lastmod><priority>0.5</priority> </url><url><loc>https://www.careernaksha.com/schools</loc><changefreq>weekly</changefreq><lastmod>2020-02-27T07:05:32+00:00</lastmod> <priority>0.4</priority></url><url><loc>https://www.careernaksha.com/college</loc><changefreq>weekly</changefreq><lastmod>2020-02-27T07:05:32+00:00</lastmod><priority>1.0</priority></url><url><loc>https://www.careernaksha.com/youth-events</loc><changefreq>weekly</changefreq><lastmod>2020-02-27T07:05:32+00:00</lastmod><priority>1.0</priority></url><url><loc>https://www.careernaksha.com/careermedia</loc><changefreq>weekly</changefreq><lastmod>2020-02-27T07:05:32+00:00</lastmod><priority>0.7</priority></url><url><loc>https://www.careernaksha.com/privacy-policy</loc><changefreq>weekly</changefreq><lastmod>2020-02-27T07:05:32+00:00</lastmod><priority>1.0</priority></url><url><loc>https://www.careernaksha.com/blogs/Top-10-Simple-Ways-How-Not-Stress-Exam-Overcome-Anxiety</loc></url>    <url><loc>https://www.careernaksha.com/blogs/Why-Career-Counselling-India-More-Valuable-Now-Ever-Before</loc></url><url><loc>https://www.careernaksha.com/blogs/Lifestyle-Coach-Nutritionist</loc></url><url><loc>https://www.careernaksha.com/blogs/Where-Do-You-See-Yourself-Five-Years</loc></url><url><loc>https://www.careernaksha.com/blogs/Scope-Opportunities-Biotechnology-WriteUp-Alok-Prakash</loc></url><url><loc>https://www.careernaksha.com/blogs/Career-In-Field-Chemistry</loc></url><url><loc>https://www.careernaksha.com/blogs/nursing-career-hospital-healthcare-haematology-counseling</loc></url><url><loc>https://www.careernaksha.com/blogs/afraid-stock-market-broker-clear-doubts-career-story</loc></url><url><loc>https://www.careernaksha.com/blogs/artificial-intelligence-ai-ml-jobs-python-data-science-career</loc></url><url><loc>https://www.careernaksha.com/blogs/blockchain-technology-crypto-innovation-management-career</loc></url><url><loc>https://www.careernaksha.com/blogs/career-comics-industry-passion-tbs-planet-fan-online-jio-flipkart</loc></url><url><loc>https://www.careernaksha.com/blogs/career-digital-marketing-job-fortune500-without-mba</loc></url><url><loc>https://www.careernaksha.com/blogs/career-geology-tech-engineering-oil-sector</loc></url><url><loc>https://www.careernaksha.com/blogs/career-school-teacher-students-teaching-passion-dedication</loc></url><url><loc>https://www.careernaksha.com/blogs/computer-networking-engineer-technology-abroad-masters-career</loc></url><url><loc>https://www.careernaksha.com/blogs/content-writing-mass-communication-arts-unconventional-career-passion</loc></url><url><loc>https://www.careernaksha.com/blogs/disc-jockey-dj-career-offbeat-passion</loc></url><url><loc>https://www.careernaksha.com/blogs/dream-career-in-photography-passion-profession</loc></url><url><loc>https://www.careernaksha.com/blogs/iim-ahmedabad-cat-guidance-engineering-to-management</loc></url><url><loc>https://www.careernaksha.com/blogs/law-career-laywer-civil-cases-criminal-corporate-judiciary</loc></url><url><loc>https://www.careernaksha.com/blogs/love-for-animals-dog-retreat-gujarat-first-quit-job-follow-passion</loc></url><url><loc>https://www.careernaksha.com/blogs/loved-science-school-biology-cancer-scientist-professor-at-college</loc></url><url><loc>https://www.careernaksha.com/blogs/master-computer-science-usa-abroad-university-washington</loc></url><url><loc>https://www.careernaksha.com/blogs/mba-motherhood-studies-while-raising-a-kid-career-journey</loc></url><url><loc>https://www.careernaksha.com/blogs/mechanical-engineering-masters-canada-abroad-journey-career</loc></url><url><loc>https://www.careernaksha.com/blogs/offbeat-naval-architecture-ocean-engineering-iit-madras-btech</loc></url><url><loc>https://www.careernaksha.com/blogs/operations-management-career-startup-logistics-leadership-role</loc></url><url><loc>https://www.careernaksha.com/blogs/painting-mithila-artist-passion-unconventional-career</loc></url><url><loc>https://www.careernaksha.com/blogs/perseverance-mathematics-super-30-iit-iim-bihar-dubai-finance</loc></url><url><loc>https://www.careernaksha.com/blogs/phd-biomedical-engineering-career-friends-professors-advice</loc></url><url><loc>https://www.careernaksha.com/blogs/phd-usa-small-town-biotechnology-tedx-speaker-motivation-failure-tale</loc></url><url><loc>https://www.careernaksha.com/blogs/polymer-science-phd-germany-hindi-medium-career-journey</loc></url><url><loc>https://www.careernaksha.com/blogs/ux-design-product-thinking-process-designer-career</loc></url><url><loc>https://www.careernaksha.com/blogs/wedding-design-mumbai-architecture-career-harsiddh</loc></url><url><loc>https://www.careernaksha.com/blogs/youngest-entrepreneur-msme-startup-award-small-town-school-boy</loc></url><url><loc>https://www.careernaksha.com/blogs/painting-mithila-artist-passion-unconventional-career</loc></url><url><loc>https://www.careernaksha.com/blogs/drop-year-iit-jee-motivation-engineering-premier-college-kota</loc></url><url><loc>https://www.careernaksha.com/blogs/business-analytics-consultant-affine-employee-iit-jee-maths-love</loc></url><url><loc>https://www.careernaksha.com/blogs/programming-passion-it-after-commerce-bca-masters-daiict</loc></url><url><loc>https://www.careernaksha.com/blogs/career-dancing-science-to-dance-switch-passion-owner-dantza</loc></url><url><loc>https://www.careernaksha.com/blogs/career-isro-space-scientist-govt-org-computer-engineer-icrb-exam</loc></url><url><loc>https://www.careernaksha.com/blogs/career-online-teaching-education-unacademy-videos-back-to-society</loc></url><url><loc>https://www.careernaksha.com/blogs/career-social-work-animal-rescue-mtv-roadies-society-offbeat</loc></url><url><loc>https://www.careernaksha.com/blogs/career-sports-karate-national-level-gold-medal-offbeat-olympics-dream</loc></url><url><loc>https://www.careernaksha.com/blogs/work-life-balance-music-passion-singer-alankaar-band-product-manager</loc></url><url><loc>https://www.careernaksha.com/blogs/anchoring-passion-full-time-global-anchor-tv-host-award-winner</loc></url><url><loc>https://www.careernaksha.com/blogs/radio-jockey-rj-janavi-vadodara-radiocity-music-career-after-commerce</loc></url><url><loc>https://www.careernaksha.com/blogs/sports-basketball-coach-nba-school-passion-career-offbeat</loc></url><url><loc>https://www.careernaksha.com/blogs/career-astrology-vastu-consulting-passion-shubhvastro-modern-practical</loc></url><url><loc>https://www.careernaksha.com/blogs/career-german-foreign-language-teaching-freelance</loc></url><url><loc>https://www.careernaksha.com/blogs/career-occult-science-vastu-shastra-crystal-switch-words-new-age</loc></url><url><loc>https://www.careernaksha.com/blogs/shifting-career-agile-teaching-marathoner-counselling-keep-learning</loc></url><url><loc>https://www.careernaksha.com/blogs/home-science-english-literature-ielts-language-teacher-msu</loc></url><url><loc>https://www.careernaksha.com/blogs/psychological-counselling-therapy-counsellor-refind-myself</loc></url><url><loc>https://www.careernaksha.com/blogs/study-abroad-student-tips-accommodation-partner-amberstudent</loc></url><url><loc>https://www.careernaksha.com/blogs/content-creator-ghost-writing-business-writer</loc></url><url><loc>https://www.careernaksha.com/blogs/private-bank-icici-wealth-management-banking-finance-job</loc></url><url><loc>https://www.careernaksha.com/blogs/maths-teaching-school-students-online-offline-education</loc></url><url><loc>https://www.careernaksha.com/blogs/iit-coaching-online-unacademy-education-maths</loc></url><url><loc>https://www.careernaksha.com/blogs/career-in-designing-interaction-design-educator-teaching-faculty-nid</loc></url><url><loc>https://www.careernaksha.com/blogs/career-socio-political-science-leader-msu-baroda-kaksha-patel</loc></url><url><loc>https://www.careernaksha.com/blogs/career-revenue-services-gst-officer-ssc-exam-public-sector</loc></url><url><loc>https://www.careernaksha.com/blogs/career-csr-social-work-ngo-consultant-adverse-learning</loc></url><url><loc>https://www.careernaksha.com/blogs/career-ngo-social-activism-talent-development-villages-education-skills</loc></url><url><loc>https://www.careernaksha.com/blogs/career-youth-politics-public-relations-elections-life-vision-university</loc></url><url><loc>https://www.careernaksha.com/blogs/career-corporate-trainer-customer-support-school-teaching</loc></url><url><loc>https://www.careernaksha.com/registration</loc><changefreq>weekly</changefreq><lastmod>2020-02-27T07:05:32+00:00</lastmod><priority>0.1</priority></url><url><loc>https://www.careernaksha.com/profile</loc><changefreq>weekly</changefreq><lastmod>2020-02-27T07:05:32+00:00</lastmod><priority>0.1</priority></url><url><loc>https://www.careernaksha.com/roi</loc><changefreq>weekly</changefreq><lastmod>2020-02-27T07:05:32+00:00</lastmod><priority>0.3</priority></url></urlset>';

     res.contentType('text/xml');
     res.send(xml);

})
    app.get('*', function(req,res){
      res.sendFile(path.join(__dirname + '/dist/index.html'));
      })

   /*app.get('*', function(req,res){
      res.status(404).send('Not Found');
      })*/

      app.listen(port,function() {
        console.log("app running on port 8080")});
      
console.log('Console listening');
