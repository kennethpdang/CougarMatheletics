// File Description: This is your main page.

// Packages to import:
import Head from 'next/head';
import Image from 'next/image';
import toast from 'react-hot-toast';
import React from 'react';
import {motion} from 'framer-motion';

export default function Home() {
  // Initialzing functions:
  const homepage_main_logo_variants = {
    hidden: {
      opacity: 0, // This means our logo would fade in.
      pathLength: 0
    }, // Initial state.
    visible: {
      opacity: 1, 
      pathLength: 1,
      transition: {
        duration: 5,
        ease: "easeInOut"
      }
    } // Final state. This is what is animated at the end.
  };

  return (
    <>
    <section id = "homepage_introduction_section">
      <center>
        <motion.svg width = "40%" viewBox = "0 0 654 417" fill = "none" xmlns="http://www.w3.org/2000/svg" className = "homepage_logo" preserveAspectRatio= " xMidYMid meet">
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible" d = "M254.5 308.5V255C257.524 248.027 259.646 250.183 263.5 255V308.5C260.341 314.254 258.454 315.603 254.5 308.5Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M425 251.5V277C430.24 275.698 432.337 274.399 433 270V258.5C432.48 253.16 431.023 251.333 425 251.5Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M388.5 293.5H382.5L386 265.5L388.5 293.5Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M280 382.5H271.5L275.5 354.5L280 382.5Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M583 350H572C571.875 342.201 571.354 338.385 564 339.5C561.482 340.371 560.522 341.233 561.5 345C562.614 353.554 564.856 357.662 570 364.5C577.95 373.034 580.475 378.514 583 389C584.248 400.526 583.112 405.084 577.5 409.5C575.573 413.213 572.337 413.919 565.5 414.5C558.716 414.564 549.727 411.808 548 407C546.273 402.192 546.081 398.496 548 389H558.5V399C564.132 401.427 566.029 401.017 568.5 399C569.832 392.912 569.671 389.299 565.5 382C563.242 376.497 560.377 372.512 551 363C548.267 353.895 547.409 348.506 548 338C552.635 330.04 556.556 327.547 565.5 326C572.548 326.605 575.658 328.592 580 334.5C582.172 337.127 582.647 341.141 583 350Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M541.5 336V356.5H529.5V344.5C530.78 340.757 527.861 339.5 524 339.5C520.139 339.5 520.748 341.476 520.5 344.5V399C520.5 399 520.5 402 524 402C527.5 402 528.098 402.868 529.5 402V385.5H541.5V402C538.655 412.413 534.41 414.835 524 415.5C513.551 412.488 510.579 409.491 510 402V336C512.907 329.112 515.788 326.708 524 326C533.769 326.346 537.911 328.158 541.5 336Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M498.5 329H487.5V412H498.5V329Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M446.5 340.5V329.5H482V340.5H470.5V413.5H456V340.5H446.5Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M414.5 413.5V328.5H443.5V341H427.5V364H438V377.5H427.5V400.5H443.5V413.5H414.5Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M391.5 328.5H379.5V414H408.5V399H391.5V328.5Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M348.5 329H336.5V412H348.5V376.5H357.5V412H370.5V329H357.5V362.5H348.5V329Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M295 342.5H306.5V412H318.5V342.5H330V329.5H295V342.5Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M283 328H266L254 412H266L269 397H283V412H296L283 328Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M215.5 329.5H201V412.5H213.5V357.5L221 412.5H228.5L238 357.5V412.5H248.5V329.5H233.5L224.5 365.5L215.5 329.5Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M432 240H412V324H426V289L432 324H445L438.5 283C444.369 279.925 445.246 274.487 445 262C445.829 250.015 444.539 244.303 432 240Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M393 240H377.5L364 324.5H375.5L377.5 308H390L393 324.5H405L393 240Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M350 325V321C347.805 324.061 345.678 325.42 338.5 326.5C332.559 326.402 329.453 325.264 325 318V251.5C329.343 241.158 332.798 237.82 341.5 238C354.385 237.931 356.401 242.084 357.5 251.5V271H346V253.5C346 253.5 346 251.5 341.5 251.5C337 251.5 337.5 253.5 337.5 253.5V311.5C337.5 311.5 339 314.5 341.5 314.5C344 314.5 346 311.5 346 311.5V294.5H341.5V282H357.5V325H350Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M295 241H284C283 260.667 281.6 303 284 315C287 330 288 323.5 299.5 327C308.7 329.8 314.667 317.5 316.5 311L314 241H303C304.167 261.167 305.8 303.4 303 311C300.2 318.6 296.5 314.167 295 311V241Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M233 268.5H223V256C223 250 212 250 212 256V313C216.296 315.594 218.704 315.83 223 313V296C226.124 296.603 228.711 293.399 233 296V319C227.577 325.342 223.983 326.479 217 326C211.588 326.227 206.166 325.1 199.5 317V278V249.5C199.5 249.5 206.675 236.572 220 237.5C233.325 238.427 233.233 250.164 233 249.5C232.767 248.835 233 261.08 233 268.5Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M305 75.5C296.637 84.0961 292.337 89.7131 286.5 103.5C286.826 108.209 287.663 109.118 290 108.5C294.135 108.121 295.701 105.864 298 100.5C302.156 95.0586 305.057 91.9766 319 86H344.5C346.185 93.96 334 122.5 334 122.5C312.529 163.457 307.887 176.041 311 182.5C312.371 189.867 315.282 191.598 326 188.5C333.634 180.196 336.569 172.706 339.5 154.5C344.279 143.707 348 122.5 348 122.5C348 122.5 355.238 98.3192 357.5 84H390.5L387.5 91.5C384.543 102.065 383.093 107.982 381.5 118.5C378.855 129.224 377.852 136.108 377.5 151C378.266 168.527 379.843 174.971 384 182.5C388.155 189.61 391.303 191.231 398 191C403.399 187.012 405.726 184.502 406 178.5L400.5 158.5C397.14 151.055 395.985 142.908 395 122.5V103.5L398 86L440.5 84C450.215 77.1694 450.824 71.8734 440.5 66.5H392.5H351.5H323.5C316.057 68.0429 312.023 70.1679 305 75.5Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M244 0.999997C233.751 6.04675 233.154 10.8639 233.5 20C236.038 24.29 238.835 25.8736 247.5 26.5C257.871 20.6047 259.412 16.1275 258 7C254.613 1.53352 251.51 0.276202 244 0.999997Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M200 71C186.481 90.8311 184.524 97.0734 183 106.5C186.631 112.806 189.105 112.19 194 106.5C194.674 97.0142 196.754 91.3214 203.5 80.5C215.364 70.04 219.519 69.1755 224.5 72.5C229.352 73.7108 229.752 76.9642 228 85.5L217 115C209.945 125.567 210.084 130.848 208.5 135.5L203.5 145.5C199.171 162.501 198.141 170.185 200 179C211.684 190.573 218.427 191.051 230.5 190.5C242.44 188.102 247.943 182.471 257.5 171.5L266 143.5C262.882 140.766 260.164 141.165 254.5 143.5V150.5C249.079 168.482 246.003 172.24 240.5 176.5C231.139 180.471 226.54 181.444 220.5 179C219.209 171.118 218.909 166.453 225.5 154L240.5 115C249.047 95.5331 250.644 86.7341 246 76C240.389 63.9359 233.428 61.8373 217 63C209.048 64.6946 205.214 66.3247 200 71Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M78.5 266.5H37C31.9978 279.399 30.9912 284.764 30 293.5C28.3868 308.666 27.9401 317.532 33 338C41.2533 349.993 45.9673 353.966 54.5 357C69.8016 358.854 78.4229 358.792 94 353.5C113.114 348.914 120.47 343.722 133 334C140.046 327.433 144.289 322.711 152.5 312C160.452 312.232 161.567 314.167 161 319C155.005 327.55 151.273 331.243 144 336C137.268 343.078 131.884 346.855 121.5 353.5C108.775 360.163 100.774 363.216 85 367.5C68.0701 368.413 59 368 44.5 364.5C30 361 23.5372 355.683 8.99999 336C2.518 320.293 0.585545 309.378 1.49999 284.5L8.99999 244.5C16.0207 228.479 22.2666 221.999 33 210C41.6232 201.394 47.5316 196.793 60 189C71.7673 182.368 78.8926 180.058 92 177C106.84 173.484 115.16 174.08 130 177C140.664 181.624 145.684 185.844 152.5 197C156.826 210.593 156.158 216.732 152.5 226.5C147.571 238.845 142.658 245.44 126 256C109.855 262.567 99.7437 265.163 78.5 266.5Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M430 140.322L579.813 152.099M430 140.322L570.48 303M430 140.322L653 115M579.813 152.099L570.48 303M579.813 152.099L653 115M570.48 303L653 115" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M273.5 251.5C272.7 241.5 263.5 239 259 239C250.2 235.479 244 245.866 242 251.5V311C242.333 316.833 246.2 328.2 259 327C271.8 325.8 274 315.833 273.5 311C273.833 295.333 274.3 261.5 273.5 251.5Z" stroke = "white"/>
          <motion.path variants = {homepage_main_logo_variants} initial = "hidden" animate = "visible"  d = "M67.5 203.5C49.4315 224.905 44.7584 235.652 40 254C73.2404 254.782 88.5598 254.532 101 251C116.29 246.651 124.365 242.081 137.5 228.5C140.985 221.842 142.193 216.904 141.5 203.5C138.615 190.525 131.866 186.251 111.5 183.5C93.7645 185.15 84.0728 188.882 67.5 203.5Z" stroke = "white"/>
        </motion.svg>
      </center>
    </section>
    <section id = "homepage_welcoming_texts_and_summary">
      <div className = "double_bordered_center_div">
        <h1> Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. </h1>
        <h3> - William Paul Thurston, American Mathematician </h3>
      </div>
    </section>
    <section id = "homepage_what_activities_we_do">
      <div className = "two_column_four_rows_chart">
        <div className = "text_column">
          <h3> Welcome to Cougar Matheletics </h3>
          <p> We are incredibly excited that you have decided to explore our webpage! And we'd love to have you to join any one of our events. </p>
        </div>
        <div className= 'two_column_four_rows_image_right_end'>
          <Image src = "/../public/logoimage.png" alt = "Picture of the CougarMatheletics's Logo." width = {450} height = {250} layout = "fill" />
        </div>
        <div className = "two_column_four_rows_image_left_end">
          <Image src = "/../public/Homepage-Tournament.jpg" alt = "Picture of University of Houston Math Tournament." width = {450} height = {250} layout = "fill" />
        </div>
        <div className = "text_column">
          <h3> Tournaments </h3>
          <p> We host a varierity of Tournaments including: a competitive mathematics tournaments, pi - memorization, math smack downs, and integration bees. You could win scholarships, and gain
            extra credit with participating professors. </p>
        </div>
        <div className = "text_column">
          <h3> Collaborations with Other Clubs </h3>
          <p> We are currently in the process of reaching out to other clubs and organizing larger events not solely focused on mathematics but in STEM in general. We are hoping for these to be 
            large events with oustide sponsors, free T-Shirts, food, and an opportunity to win scholarships and internships. We hope to do large - scale events inpired by the UH Clear - Lake 
            STEM Competition. </p>
        </div>
        <Image src = "/../public/Homepage-Club-Collaboration.jpg" alt = "Picture of potential club collaboration between Code Coogs and Cougar Matheletics." width = {450} height = {250} layout = "fixed" />
        <Image src = "/../public/Homepage-Potluck.jpg" alt = "Picture of table with food, demonstrating a potluck gathering." width = {450} height = {250} layout = "fixed" />
        <div className = "text_column">
          <h3> Socials </h3>
          <p> Looking for a place to connect without much commitment? Join us for socials! We have bowling socials, volunteering socials, 
            and ocasionally we host workshops like our LaTeX workshops with sometimes food. It's a much more relaxed environment to connect with your peers. We also have
            our highly anticipated end-of-the-year banquets. </p>
        </div>
      </div>
    </section>
    <section id = "homepage_posts">
      <h2> Selected Posts </h2>
      <div id = "post_grid">
        <div className = "post id1">
          <h2> What are Lie Groups? </h2>
          <h3> By Kyle Williams </h3> 
        </div>
        <div className = "post id2">
          <h2> How to Prepare for Competitive Mathematics? </h2>
          <h3> By Kenneth Dang </h3> 
        </div>
        <div className = "post id3">
          <h2> Math in Programming </h2>
          <h3> By Yaseen Syed </h3> 
        </div>
        <div className = "post id4">
          <h2> Tips for the William Lowell Putnam </h2>
          <h3> By Kenneth Dang </h3> 
        </div>
        <div className = "post id5">
          <h2> A Day in the Life of a Undergraduate </h2>
          <h3> By Luis Martinez </h3> 
        </div>
        <div className = "post id6">
          <h2> Math in Physics: An Overview </h2>
          <h3> By Conner Nguyen </h3> 
        </div>
        <div className = "post id7">
          <h2> Life of a Senior Ph.D Candidate </h2>
          <h3> By Kyle Williams </h3> 
        </div>
        <div className = "post id8">
          <h2> A Breif Dive into Quantum Mechanics Part II </h2>
          <h3> By Connner Nguyen </h3> 
        </div>
        <div className = "post id9">
          <h2> A Breif Dive into Quantum Mechanics Part I </h2>
          <h3> By Conner Nguyen </h3> 
        </div>
        <div className = "post id10">
          <h2> What are Lie Groups? </h2>
          <h3> By Kyle Williams </h3> 
        </div>
        <div className = "post id11">
          <h2> So You Want to Do Research? </h2>
          <h3> By Syed Abidi </h3> 
        </div>
        <div className = "post id12">
          <h2> Why I Love Pure Math More </h2>
          <h3> By Caleb Barnett </h3> 
        </div>
        <div className = "post id13">
          <h2> What I Like Applied Math </h2>
          <h3> By Mark Simmons </h3> 
        </div>
        <div className = "post id14">
          <h2> AI, LEAN, and the Future of Proofs </h2>
          <h3> By Dr. Josic </h3> 
        </div>
        <div className = "post id15">
          <h2> Optimization, Machine Learning, and AI </h2>
          <h3> By Yaseen Syed </h3> 
        </div>
      </div>
    </section>
    </>
  )
}