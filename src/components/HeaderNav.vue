<template>
    <b-container>
      <b-row align-v="center">
        <b-col>
            <b-img left fluid-grow src='../assets/logo-focus-grande.png'/>
        </b-col>
        <b-col cols="8">
          <center>
            <b-img align-v='center' src='../assets/logo-paideia-grande.png'/>
          </center>
        </b-col>
      </b-row> 
      <b-row>
        <nav id="myTopnav" class='topnav'>
          <ul>            
           <li><a href='#/'>Home</a></li>
           <li>
             <a href=''>Sobre <span class="caret"></span></a>
              <div>
                <ul>
                  <li><a href='/associacao'>Associação Paideia</a></li>
                  <li><a href='/focus'>Focus Cursinho</a></li>
                </ul>
              </div>
            </li>
           <li><a href='#/news'>Notícias</a></li>
           <li><a href='#/login'>Login</a></li>
           <li><a href='#/subscribe'>Registro</a></li>
           <li class="icon"><a href="javascript:void(0);" style="font-size:15px;"  v-on:click='myFunction' >&#9776;</a></li>
          </ul>
        </nav>
      </b-row>
    </b-container>
</template>

<script>
export default {
  name: 'HeaderNav',
  data() {

  },
  methods: {
    myFunction: () => {
      const x = document.getElementById('myTopnav');
      if (x.className === 'topnav') {
        x.className += ' responsive';
      } else {
        x.className = 'topnav';
      }
    },
  },
};
</script>

<style lang='scss'>
@import '../custom-bootstrap.scss';

img {
    max-width: 100%;
    height: auto;
}

nav {
  background-color: $brand-primary;
  border: 1px solid #dedede;
  border-radius: 4px;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.055);
  color: #888;
  display: block;
  margin: 8px 22px 8px 22px;
  overflow: hidden;
  width: 100%; 
}

nav ul {
    margin: 0;
    padding: 0;
}
 
nav ul li {
    display: inline-block;
    list-style-type: none;
      
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -ms-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s; 
}
     
nav > ul > li > a {
    color: rgb(255, 255, 255);
    display: block;
    line-height: 56px;
    padding: 0 24px;
    text-decoration: none;
}

nav > ul > li > a > .caret {
  border-top: 4px solid rgb(255, 255, 255);
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  content: "";
  display: inline-block;
  height: 0;
  width: 0;
  vertical-align: middle;

  -webkit-transition: color 0.1s linear;
  -moz-transition: color 0.1s linear;
  -o-transition: color 0.1s linear;
  transition: color 0.1s linear; 
}

nav > ul > li:hover {
  background-color: $paideia-purple;
}
 
nav > ul > li:hover > a {
  color: rgb( 255, 255, 255 );
}
 
nav > ul > li:hover > a > .caret {
  border-top-color: rgb( 255, 255, 255 );
}

nav > ul > li > div {
    background-color: rgb( 40, 44, 47 );
    border-top: 0;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.055);
    display: none;
    margin: 0;
    opacity: 0;
    position: absolute;
    width: 165px;
    visibility: hidden;
    z-index: 100;     
    -webkit-transiton: opacity 0.2s;
    -moz-transition: opacity 0.2s;
    -ms-transition: opacity 0.2s;
    -o-transition: opacity 0.2s;
    -transition: opacity 0.2s;
}
 
nav > ul > li > div ul > li {
    display: block;
}
  
nav > ul > li > div ul > li > a {
    color: #fff;
    display: block;
    padding: 12px 24px;
    text-decoration: none;
}

nav > ul > li:hover > div {
    display: block;
    opacity: 1;
    visibility: visible;
}
  
nav > ul > li > div ul > li:hover > a {
    background-color: rgba( 255, 255, 255, 0.1);
}

nav .icon {
  display: none;
}

@media screen and (max-width: 768px) {
  nav:not(.responsive) ul li:not(:first-child):not(.icon) {display: none;}
  nav .icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 768px) {
  nav.responsive {position: relative;}
  nav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  nav.responsive ul li{
    float: none;
    display: block;
    text-align: left;
  }

}
</style>
