# Installing Bootstrap

<div class="highlight highlight-source-shell"><pre>

<span class="pl-c"><span class="pl-c">#</span> version 4.x</span>
npm install bootstrap@next --save</pre></div>

# Configuring Project
<p>Now that the project is set up it must be configured to include the bootstrap CSS.</p>
<ul>
<li>
<p>Open the file <code>.angular-cli.json</code> from the root of your project.</p>
</li>
<li>
<p>Under the property <code>apps</code> the first item in that array is the default application.</p>
</li>
<li>
<p>There is a property <code>styles</code> which allows external global styles to be applied to your application.</p>
</li>
<li>
<p>Specify the path to <code>bootstrap.min.css</code></p>
<p>It should look like the following when you are done:</p>
<div class="highlight highlight-source-json"><pre><span class="pl-s"><span class="pl-pds">"</span>styles<span class="pl-pds">"</span></span>: [
  <span class="pl-s"><span class="pl-pds">"</span>../node_modules/bootstrap/dist/css/bootstrap.min.css<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>styles.css<span class="pl-pds">"</span></span>
],</pre></div>
</li>
</ul>
<p><strong>Note:</strong> When you make changes to <code>.angular-cli.json</code> you will need to re-start <code>ng serve</code> to pick up configuration changes.</p>
