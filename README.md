#Usage

<pre>
    //_vars.scss
    $columns:           12!default; // Set the amount fo columns you want to use
    $gutterWidth:       20!default; // Set the gap between columns
    $siteWidth:         1200px; // Set the default width of the site. Pixel, em or percentage


    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col col6-12&quot;&gt;
            &lt;div class=&quot;col-inner&quot;&gt;
                .col 
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col col6-12&quot;&gt;
            &lt;div class=&quot;col-inner&quot;&gt;
                .col6
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
</pre>


The <code>.colnumerator-denominator //.col4-12</code> classes are generated based on the number of columns you have set so they follow a fraction based naming convention so <code>.col4-12</code> would be four/twelths or one/third of the width of the site, <code>.col6-12</code> would be half and so on. You aren't limited to 12 though, you could use a 24 column system so a <code>.col4-12</code> would be the same as <code>.col8-24</code> ie. one/third