#Usage

<pre>
    //_vars.scss
    $columns:           12!default; // Set the amount fo columns you want to use
    $gutterWidth:       20!default; // Set the gap between columns
    $siteWidth:         1200px; // Set the default width of the site. Pixel, em or percentage


    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col col&quot;&gt;
            &lt;div class=&quot;col-inner&quot;&gt;
                .col 
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col col6&quot;&gt;
            &lt;div class=&quot;col-inner&quot;&gt;
                .col6
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
</pre>


The <code>.colx-x //.span4-12</code> classes are generated based on the number of columns you have set so they follow a fraction based naming convention so <code>.span4-12</code> would be 1 third of the width of the site, <code>.span6-12</code> would be half and so on.