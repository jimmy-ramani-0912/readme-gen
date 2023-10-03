import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import FormTitle from "./FormTitle/FormTitle";
import Input from "./Input/Input";
import CategoryList from "./Categories/Categories";
import Social from "./Social/Social";

const FormCompo = Styled.div`
padding: 3rem 5rem;
`;

const FlexItem = Styled.div`
display: flex;
gap:10rem;
`;

const ML = Styled.div`
width: 100%;
margin-left:2rem;
`;

const Space = Styled.div`
height:3.4rem;
`;

const SpaceM = Styled.div`
height:1.4rem;
`;

const ButtonBox = Styled.div`
margin:auto;
width: 26rem;
border: 0.2rem solid black;
& h1{
text-align: center;
color:#0B0B23;
font-size:2.2rem;
font-weight:500;
padding:0.8rem ;
}
cursor:pointer;
transition: box-shadow 0.3s ease-in-out;
animation: pulseShadow 0.8s infinite; /* Apply animation on hover */

@keyframes pulseShadow {
  0% {
    box-shadow: 0px 0px 0px 3px rgb(128, 128, 128, 0.0);
  }
  25% {
    box-shadow: 0px 0px 0px 6px rgb(128, 128, 128, 0.1);
  }
  50% {
    box-shadow: 0px 0px 0px 9px rgb(128, 128, 128, 0.3); /* Increase shadow intensity */
  }
  75% {
    box-shadow: 0px 0px 0px 6px rgb(128, 128, 128, 0.1); /* Increase shadow intensity */
  }
  100% {
    box-shadow: 0px 0px 0px 3px rgb(128, 128, 128, 0); /* Increase shadow intensity */
  }
}
`;

let inputDataArr = [
  { title: "title", value: "Hi 👋, I'm" },
  { title: "title-name", value: "" },
  { title: "subtitle", value: "A passionate frontend developer from India" },
  { title: "w1", value: "🔭 I’m currently working on" },
  { title: "wpn1", value: "" },
  { title: "wpl1", value: "" },
  { title: "w2", value: "👯 I’m looking to collaborate on" },
  { title: "wpn2", value: "" },
  { title: "wpl2", value: "" },
  { title: "w3", value: "🤝 I’m looking for help with" },
  { title: "wpn3", value: "" },
  { title: "wpl3", value: "" },
  { title: "w4", value: "🌱 I’m currently learning" },
  { title: "wpn4", value: "" },
  { title: "w5", value: "💬 Ask me about" },
  { title: "wpn5", value: "" },
  { title: "w6", value: "📫 How to reach me" },
  { title: "wpn6", value: "" },
  { title: "w7", value: "👨‍💻 All of my projects are available at" },
  { title: "wpn7", value: "" },
  { title: "w8", value: "📝 I regularly write articles on" },
  { title: "wpn8", value: "" },
  { title: "w9", value: "📄 Know about my experiences" },
  { title: "wpn9", value: "" },
  { title: "w10", value: "⚡ Fun fact" },
  { title: "wpn10", value: "" },
];

const categoriesData = [
  {
    category: "Programming Languages",
    icons: [
      {
        name: "C",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/926px-C_Programming_Language.svg.png",
        isChecked: false,
      },
      {
        name: "C++",
        iconImage:
          "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png",
        isChecked: false,
      },
      {
        name: "C#",
        iconImage:
          "https://w7.pngwing.com/pngs/520/669/png-transparent-c-logo-c-programming-language-computer-icons-computer-programming-programming-miscellaneous-blue-trademark.png",
        isChecked: false,
      },
      {
        name: "TypeScript",
        iconImage:
          "https://cdn.iconscout.com/icon/free/png-256/free-typescript-1174965.png",
        isChecked: false,
      },
      {
        name: "Java",
        iconImage: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
        isChecked: false,
      },
      {
        name: "Go",
        iconImage:
          "https://static-00.iconduck.com/assets.00/golang-icon-398x512-eygvdisi.png",
        isChecked: false,
      },
      {
        name: "Ruby",
        iconImage:
          "https://w7.pngwing.com/pngs/535/618/png-transparent-ruby-on-rails-computer-programming-programming-language-ruby-angle-rectangle-logo.png",
        isChecked: false,
      },
      {
        name: "php",
        iconImage:
          "https://w7.pngwing.com/pngs/751/3/png-transparent-logo-php-html-others-text-trademark-logo-thumbnail.png",
        isChecked: false,
      },
      {
        name: "Perl",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Perl_language_logo.svg/1200px-Perl_language_logo.svg.png",
        isChecked: false,
      },
      {
        name: "Scala",
        iconImage: "https://cdn-icons-png.flaticon.com/512/6132/6132220.png",
        isChecked: false,
      },
      {
        name: "Python",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
        isChecked: false,
      },
      {
        name: "Swift",
        iconImage: "https://cdn-icons-png.flaticon.com/512/5968/5968371.png",
        isChecked: false,
      },
      {
        name: "ObjectiveC",
        iconImage:
          "https://iconape.com/wp-content/png_logo_vector/objective-c-logo.png",
        isChecked: false,
      },
      {
        name: "Clojure",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Clojure_logo.svg/2048px-Clojure_logo.svg.png",
        isChecked: false,
      },
      {
        name: "Rust",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1024px-Rust_programming_language_black_logo.svg.png",
        isChecked: false,
      },
      {
        name: "Haskell",
        iconImage: "https://cdn-icons-png.flaticon.com/512/5968/5968259.png",
        isChecked: false,
      },
      {
        name: "CoffeeScript",
        iconImage:
          "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d8fae28714e182eef659ca988ef6ac51/coffeescript.png",
        isChecked: false,
      },
      {
        name: "Elixir",
        iconImage:
          "https://cdn.icon-icons.com/icons2/2699/PNG/512/elixir_lang_logo_icon_169207.png",
        isChecked: false,
      },
    ],
  },
  {
    category: "Frontend Development",
    icons: [
      {
        name: "Vue.js",
        iconImage:
          "https://w7.pngwing.com/pngs/253/990/png-transparent-vuejs-vuejs-logo-company-logo-logo-programming-langugae-coding-language-3d-icon.png",
        isChecked: false,
      },
      {
        name: "ReactJS",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        isChecked: false,
      },
      {
        name: "svelte",
        iconImage:
          "https://raw.githubusercontent.com/sveltejs/svelte/29052aba7d0b78316d3a52aef1d7ddd54fe6ca84/site/static/images/svelte-android-chrome-512.png",
        isChecked: false,
      },
      {
        name: "angular",
        iconImage:
          "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
        isChecked: false,
      },
      {
        name: "angularjs",
        iconImage:
          "https://cdn4.iconfinder.com/data/icons/logos-3/543/AngularJS-512.png",
        isChecked: false,
      },
      {
        name: "backbonejs",
        iconImage:
          "https://w7.pngwing.com/pngs/810/156/png-transparent-backbone-js-javascript-programmer-react-technology-angle-electronics-text-thumbnail.png",
        isChecked: false,
      },
      {
        name: "bootstrap",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        isChecked: false,
      },
      {
        name: "vuetify",
        iconImage:
          "https://static-00.iconduck.com/assets.00/vuetify-icon-223x256-3xz0ru5e.png",
        isChecked: false,
      },
      {
        name: "html",
        iconImage:
          "https://images.vexels.com/media/users/3/166383/isolated/preview/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon.png",
        isChecked: false,
      },
      {
        name: "css",
        iconImage: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
        isChecked: false,
      },
      {
        name: "pug",
        iconImage:
          "https://johnsoncodehk.gallerycdn.vsassets.io/extensions/johnsoncodehk/vscode-pug/1.1.2/1688767501654/Microsoft.VisualStudio.Services.Icons.Default",
        isChecked: false,
      },
      {
        name: "gulp",
        iconImage:
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/gulp-js-icon.png",
        isChecked: false,
      },
      {
        name: "sass",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
        isChecked: false,
      },
      {
        name: "redux",
        iconImage:
          "https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png",
        isChecked: false,
      },
      {
        name: "babel",
        iconImage:
          "https://raw.githubusercontent.com/babel/logo/master/babel.png",
        isChecked: false,
      },
      {
        name: "tailwind",
        iconImage:
          "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png",
        isChecked: false,
      },
      {
        name: "materialise",
        iconImage: "https://colinstodd.com/images/posts/matcss-min.png",
        isChecked: false,
      },
      {
        name: "ember",
        iconImage: "https://emberjs.com/images/brand/ember-4c.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Backend Development",
    icons: [
      {
        name: "nodejs",
        iconImage:
          "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png",
        isChecked: false,
      },
      {
        name: "spring",
        iconImage:
          "https://e7.pngegg.com/pngimages/931/804/png-clipart-spring-framework-software-framework-java-application-framework-web-framework-java-leaf-text-thumbnail.png",
        isChecked: false,
      },
      {
        name: "express",
        iconImage:
          "https://cdn.iconscout.com/icon/free/png-256/free-express-2-282577.png",
        isChecked: false,
      },
      {
        name: "kafka",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Apache_kafka-icon.svg/2048px-Apache_kafka-icon.svg.png",
        isChecked: false,
      },
      {
        name: "solr",
        iconImage:
          "https://cdn.icon-icons.com/icons2/2699/PNG/512/apache_solr_logo_icon_168611.png",
        isChecked: false,
      },
      {
        name: "rabbitMQ",
        iconImage:
          "https://cdn.icon-icons.com/icons2/2699/PNG/512/rabbitmq_logo_icon_170810.png",
        isChecked: false,
      },
      {
        name: "hadoop",
        iconImage:
          "https://w7.pngwing.com/pngs/260/648/png-transparent-apache-hadoop-logo-big-data-data-analysis-hadoop-distributed-filesystem-hue-hadoop-text-logo-smiley.png",
        isChecked: false,
      },
      {
        name: "nginx",
        iconImage:
          "https://cdn.icon-icons.com/icons2/2415/PNG/512/nginx_original_logo_icon_146413.png",
        isChecked: false,
      },
      {
        name: "openresty",
        iconImage: "https://avatars.githubusercontent.com/u/7390180?s=280&v=4",
        isChecked: false,
      },
      {
        name: "nestjs",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png",
        isChecked: false,
      },
    ],
  },
  {
    category: "Mobile App Development",
    icons: [
      {
        name: "android",
        iconImage:
          "https://cdn0.iconfinder.com/data/icons/designer-skills/128/android-2-512.png",
        isChecked: false,
      },
      {
        name: "flutter",
        iconImage:
          "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_flutter_icon_130599.png",
        isChecked: false,
      },
      {
        name: "dart",
        iconImage:
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/dart-programming-language-icon.png",
        isChecked: false,
      },
      {
        name: "kotlin",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
        isChecked: false,
      },
      {
        name: "nativescript",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/4/4f/NativeScript_logo.png",
        isChecked: false,
      },
      {
        name: "xamarin",
        iconImage:
          "https://w7.pngwing.com/pngs/304/124/png-transparent-xamarin-android-cross-platform-native-studio-blue-angle-studio.png",
        isChecked: false,
      },
      {
        name: "reactnative",
        iconImage:
          "data:image/png;base64,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",
        isChecked: false,
      },
      {
        name: "ionic",
        iconImage:
          "https://www.pinpng.com/pngs/m/310-3104493_create-adaptive-icons-for-ionic-cordova-applications-ionic.png",
        isChecked: false,
      },
      {
        name: "aparchecordova",
        iconImage:
          "https://cdn.icon-icons.com/icons2/2699/PNG/512/apache_cordova_logo_icon_170570.png",
        isChecked: false,
      },
    ],
  },
  {
    category: "AI / ML",
    icons: [
      {
        name: "tensorflow",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1915px-Tensorflow_logo.svg.png",
        isChecked: false,
      },
      {
        name: "pytorch",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/1200px-PyTorch_logo_icon.svg.png",
        isChecked: false,
      },
      {
        name: "pandas",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
        isChecked: false,
      },
      {
        name: "seaborn",
        iconImage: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
        isChecked: false,
      },
      {
        name: "opencs",
        iconImage: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg",
        isChecked: false,
      },
      {
        name: "scikit_learn",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Databses",
    icons: [
      {
        name: "mongodb",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "mysql",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "postgresql",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "redis",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "oracle",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
        isChecked: false,
      },
      {
        name: "couchdb",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/0d6c64dbbf311879f7d563bfc3ccf559f9ed111c/icons/couchdb/couchdb-original.svg",
        isChecked: false,
      },
      {
        name: "hive",
        iconImage:
          "https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg",
        isChecked: false,
      },
      {
        name: "realm",
        iconImage:
          "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg",
        isChecked: false,
      },
      {
        name: "mariadb",
        iconImage: "https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg",
        isChecked: false,
      },
      {
        name: "cockroachdb",
        iconImage: "https://cdn.worldvectorlogo.com/logos/cockroachdb.svg",
        isChecked: false,
      },
      {
        name: "elesticsearch",
        iconImage: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg",
        isChecked: false,
      },
      {
        name: "sqlite",
        iconImage: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
        isChecked: false,
      },
      {
        name: "mssqle",
        iconImage:
          "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Data Visualization",
    icons: [
      {
        name: "d3js",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg",
        isChecked: false,
      },
      {
        name: "chartjs",
        iconImage: "https://www.chartjs.org/media/logo-title.svg",
        isChecked: false,
      },
      {
        name: "canvasjs",
        iconImage:
          "https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg",
        isChecked: false,
      },
      {
        name: "kibana",
        iconImage:
          "https://www.vectorlogo.zone/logos/elasticco_kibana/elasticco_kibana-icon.svg",
        isChecked: false,
      },
      {
        name: "grafana",
        iconImage: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Devops",
    icons: [
      {
        name: "aws",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "docker",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "jenkins",
        iconImage: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
        isChecked: false,
      },
      {
        name: "gcp",
        iconImage:
          "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
        isChecked: false,
      },
      {
        name: "kubernetes",
        iconImage:
          "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
        isChecked: false,
      },
      {
        name: "bash",
        iconImage:
          "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
        isChecked: false,
      },
      {
        name: "azure",
        iconImage:
          "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
        isChecked: false,
      },
      {
        name: "vagrant",
        iconImage:
          "https://www.vectorlogo.zone/logos/vagrantup/vagrantup-icon.svg",
        isChecked: false,
      },
      {
        name: "circleci",
        iconImage:
          "https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg",
        isChecked: false,
      },
      {
        name: "travisci",
        iconImage:
          "https://www.vectorlogo.zone/logos/travis-ci/travis-ci-icon.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Backend as a Service(BaaS)",
    icons: [
      {
        name: "firebase",
        iconImage:
          "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        isChecked: false,
      },
      {
        name: "appwrite",
        iconImage:
          "https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg",
        isChecked: false,
      },
      {
        name: "amplify",
        iconImage: "https://docs.amplify.aws/assets/logo-dark.svg",
        isChecked: false,
      },
      {
        name: "heroku",
        iconImage: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Framework",
    icons: [
      {
        name: "django",
        iconImage: "https://cdn.worldvectorlogo.com/logos/django.svg",
        isChecked: false,
      },
      {
        name: "dotnet",
        iconImage: "https://cdn.worldvectorlogo.com/logos/django.svg",
        isChecked: false,
      },
      {
        name: "electron",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg",
        isChecked: false,
      },
      {
        name: "symfony",
        iconImage: "https://symfony.com/logos/symfony_black_03.svg",
        isChecked: false,
      },
      {
        name: "laravel",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg",
        isChecked: false,
      },
      {
        name: "codeigniter",
        iconImage: "https://cdn.worldvectorlogo.com/logos/codeigniter.svg",
        isChecked: false,
      },
      {
        name: "rails",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
        isChecked: false,
      },
      {
        name: "flask",
        iconImage:
          "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
        isChecked: false,
      },
      {
        name: "quasar",
        iconImage: "https://cdn.quasar.dev/logo/svg/quasar-logo.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Testing",
    icons: [
      {
        name: "cypress",
        iconImage:
          "https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg",
        isChecked: false,
      },
      {
        name: "selenium",
        iconImage:
          "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg",
        isChecked: false,
      },
      {
        name: "jest",
        iconImage:
          "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
        isChecked: false,
      },
      {
        name: "mocha",
        iconImage: "https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg",
        isChecked: false,
      },
      {
        name: "puppeteer",
        iconImage:
          "https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg",
        isChecked: false,
      },
      {
        name: "karma",
        iconImage:
          "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/karma.svg",
        isChecked: false,
      },
      {
        name: "jasmin",
        iconImage: "https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Software",
    icons: [
      {
        name: "illustrator",
        iconImage:
          "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
        isChecked: false,
      },
      {
        name: "photoshop",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
        isChecked: false,
      },
      {
        name: "xd",
        iconImage: "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg",
        isChecked: false,
      },
      {
        name: "figma",
        iconImage: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
        isChecked: false,
      },
      {
        name: "blender",
        iconImage:
          "https://download.blender.org/branding/community/blender_community_badge_white.svg",
        isChecked: false,
      },
      {
        name: "sketch",
        iconImage:
          "https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg",
        isChecked: false,
      },
      {
        name: "invision",
        iconImage:
          "https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg",
        isChecked: false,
      },
      {
        name: "framer",
        iconImage: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
        isChecked: false,
      },
      {
        name: "matlab",
        iconImage:
          "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
        isChecked: false,
      },
      {
        name: "postman",
        iconImage:
          "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Static Site Generators",
    icons: [
      {
        name: "gatsby",
        iconImage:
          "https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg",
        isChecked: false,
      },
      {
        name: "gridsome",
        iconImage:
          "https://www.vectorlogo.zone/logos/gridsome/gridsome-icon.svg",
        isChecked: false,
      },
      {
        name: "hugo",
        iconImage: "https://api.iconify.design/logos-hugo.svg",
        isChecked: false,
      },
      {
        name: "jekyll",
        iconImage:
          "https://www.vectorlogo.zone/logos/jekyllrb/jekyllrb-icon.svg",
        isChecked: false,
      },
      {
        name: "nextjs",
        iconImage: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
        isChecked: false,
      },
      {
        name: "nuxtjs",
        iconImage: "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg",
        isChecked: false,
      },
      {
        name: "11ty",
        iconImage:
          "https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/f4c85cce5790758286b8f155ef9a177710b995df/11ty.svg",
        isChecked: false,
      },
      {
        name: "scully",
        iconImage:
          "https://raw.githubusercontent.com/scullyio/scully/main/assets/logos/SVG/scullyio-icon.svg",
        isChecked: false,
      },
      {
        name: "sculpin",
        iconImage:
          "https://gist.githubusercontent.com/vivek32ta/c7f7bf583c1fb1c58d89301ea40f37fd/raw/1782aef8672484698c0dd407f900c4a329ed5bc4/sculpin.svg",
        isChecked: false,
      },
      {
        name: "sapper",
        iconImage:
          "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/master/public/logos/sapper.svg",
        isChecked: false,
      },
      {
        name: "vuepress",
        iconImage:
          "https://raw.githubusercontent.com/AliasIO/wappalyzer/master/src/drivers/webextension/images/icons/VuePress.svg",
        isChecked: false,
      },
      {
        name: "hexo",
        iconImage: "https://www.vectorlogo.zone/logos/hexoio/hexoio-icon.svg",
        isChecked: false,
      },
      {
        name: "middleman",
        iconImage:
          "https://raw.githubusercontent.com/leungwensen/svg-icon/b84b3f3a3da329b7c1d02346865f8e98beb05413/dist/svg/logos/middleman.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Game Engines",
    icons: [
      {
        name: "unity",
        iconImage: "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg",
        isChecked: false,
      },
      {
        name: "unreal",
        iconImage:
          "https://raw.githubusercontent.com/kenangundogan/fontisto/036b7eca71aab1bef8e6a0518f7329f13ed62f6b/icons/svg/brand/unreal-engine.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Automation",
    icons: [
      {
        name: "zapier",
        iconImage: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg",
        isChecked: false,
      },
      {
        name: "ifttt",
        iconImage: "https://www.vectorlogo.zone/logos/ifttt/ifttt-ar21.svg",
        isChecked: false,
      },
    ],
  },
  {
    category: "Other",
    icons: [
      {
        name: "linux",
        iconImage:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
        isChecked: false,
      },
      {
        name: "git",
        iconImage: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
        isChecked: false,
      },
      {
        name: "arduino",
        iconImage: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
        isChecked: false,
      },
    ],
  },
];

function Form({ onSubmit }) {
  const [inputData, setInputData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [socialData, setSocialData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("inputData");
    const savedSocialData = localStorage.getItem("socialData");

    if (savedData) {
      setInputData(JSON.parse(savedData));
    } else {
      setInputData(inputDataArr);
    }

    if (savedSocialData) {
      setSocialData(JSON.parse(savedSocialData));
    } else {
      setSocialData([]);
    }
  }, []);

  const handleSelectionChange = (selectedCategories) => {
    setSelectedData(selectedCategories);
  };

  const handleSubmit = () => {
    const finalData = {
      input: inputData,
      icons: selectedData,
      social: socialData,
    };
    console.log(
      JSON.stringify(finalData) + "]]]]]]]]]]]]]]]]]]]]]]]]]]]]]55566"
    );
    onSubmit(finalData);
  };

  const handleInputChange = (title, value) => {
    const existingObjectIndex = inputData.findIndex(
      (item) => item.title === title
    );

    if (existingObjectIndex !== -1) {
      const updatedInputData = [...inputData];
      updatedInputData[existingObjectIndex].value = value;
      setInputData(updatedInputData);
    } else {
      const inputObject = {
        title: title,
        value: value,
      };
      setInputData([...inputData, inputObject]);
    }
    localStorage.setItem("inputData", JSON.stringify(inputData));
  };

  const handleSocialInputChange = (title, logo, value) => {
    const socialItemIndex = socialData.findIndex(
      (item) => item.title === title
    );
    const newSocialItem = { title, logo, value };

    if (socialItemIndex !== -1) {
      const updatedSocialData = [...socialData];
      updatedSocialData[socialItemIndex] = newSocialItem;
      setSocialData(updatedSocialData);
      localStorage.setItem("socialData", JSON.stringify(updatedSocialData));
    } else {
      setSocialData([...socialData, newSocialItem]);
    }
  };

  return (
    <FormCompo>
      <FormTitle headingTitle={"Title"} />
      <FlexItem>
        <Input
          width={"15%"}
          title={"title"}
          placeholder={""}
          // initialValue={"Hi 👋, I'm"}
          value={inputData.find((item) => item.title === "title")?.value || ""}
          onChange={(value) => handleInputChange("title", value)}
        />
        <ML>
          <Input
            width={"45%"}
            title={"title-name"}
            value={
              inputData.find((item) => item.title === "title-name")?.value || ""
            }
            placeholder={"name"}
            onChange={(value) => handleInputChange("title-name", value)}
          />
        </ML>
      </FlexItem>
      <Space />
      <FormTitle headingTitle={"Subtitle"} />
      <Input
        width={"70%"}
        title={"subtitle"}
        placeholder={""}
        value={inputData.find((item) => item.title === "subtitle")?.value || ""}
        onChange={(value) => handleInputChange("subtitle", value)}
      />
      <Space />
      <FormTitle headingTitle={"Work"} />
      <FlexItem>
        <Input
          width={"35%"}
          title={"w1"}
          placeholder={"Hi, I'm"}
          value={inputData.find((item) => item.title === "w1")?.value || ""}
          onChange={(value) => handleInputChange("w1", value)}
        />
        <Input
          width={"20%"}
          title={"wpn1"}
          placeholder={"project name"}
          value={inputData.find((item) => item.title === "wpn1")?.value || ""}
          onChange={(value) => handleInputChange("wpn1", value)}
        />
        <Input
          width={"20%"}
          title={"wpl1"}
          placeholder={"project link"}
          value={inputData.find((item) => item.title === "wpl1")?.value || ""}
          onChange={(value) => handleInputChange("wpl1", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={"35%"}
          title={"w2"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w2")?.value || ""}
          onChange={(value) => handleInputChange("w2", value)}
        />
        <Input
          width={"20%"}
          title={"wpn2"}
          placeholder={"project name"}
          value={inputData.find((item) => item.title === "wpn2")?.value || ""}
          onChange={(value) => handleInputChange("wpn2", value)}
        />
        <Input
          width={"20%"}
          title={"wpl2"}
          placeholder={"project link"}
          value={inputData.find((item) => item.title === "wpl2")?.value || ""}
          onChange={(value) => handleInputChange("wpl2", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={"35%"}
          title={"w3"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w3")?.value || ""}
          onChange={(value) => handleInputChange("w3", value)}
        />
        <Input
          width={"20%"}
          title={"wpn3"}
          placeholder={"project name"}
          value={inputData.find((item) => item.title === "wpn3")?.value || ""}
          onChange={(value) => handleInputChange("wpn3", value)}
        />
        <Input
          width={"20%"}
          title={"wpl3"}
          placeholder={"project link"}
          value={inputData.find((item) => item.title === "wpl3")?.value || ""}
          onChange={(value) => handleInputChange("wpl3", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={"35%"}
          title={"w4"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w4")?.value || ""}
          onChange={(value) => handleInputChange("w4", value)}
        />
        <Input
          width={"35%"}
          title={"wpn4"}
          placeholder={"Frameworks, courses etc."}
          value={inputData.find((item) => item.title === "wpn4")?.value || ""}
          onChange={(value) => handleInputChange("wpn4", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={"35%"}
          title={"w5"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w5")?.value || ""}
          onChange={(value) => handleInputChange("w5", value)}
        />
        <Input
          width={"35%"}
          title={"wpn5"}
          placeholder={"react, vue and gsap"}
          value={inputData.find((item) => item.title === "wpn5")?.value || ""}
          onChange={(value) => handleInputChange("wpn5", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={"35%"}
          title={"w6"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w6")?.value || ""}
          onChange={(value) => handleInputChange("w6", value)}
        />
        <Input
          width={"35%"}
          title={"wpn6"}
          placeholder={"example@gmail.com"}
          value={inputData.find((item) => item.title === "wpn6")?.value || ""}
          onChange={(value) => handleInputChange("wpn6", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={"35%"}
          title={"w7"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w7")?.value || ""}
          onChange={(value) => handleInputChange("w7", value)}
        />
        <Input
          width={"35%"}
          title={"wpn7"}
          placeholder={"portfolio link"}
          value={inputData.find((item) => item.title === "wpn7")?.value || ""}
          onChange={(value) => handleInputChange("wpn7", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={"35%"}
          title={"w8"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w8")?.value || ""}
          onChange={(value) => handleInputChange("w8", value)}
        />
        <Input
          width={"35%"}
          title={"wpn8"}
          placeholder={"blog link "}
          value={inputData.find((item) => item.title === "wpn8")?.value || ""}
          onChange={(value) => handleInputChange("wpn8", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={"35%"}
          title={"w9"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w9")?.value || ""}
          onChange={(value) => handleInputChange("w9", value)}
        />
        <Input
          width={"35%"}
          title={"wpn9"}
          placeholder={"resume link"}
          value={inputData.find((item) => item.title === "wpn9")?.value || ""}
          onChange={(value) => handleInputChange("wpn9", value)}
        />
      </FlexItem>
      <SpaceM />
      <FlexItem>
        <Input
          width={"35%"}
          title={"w10"}
          placeholder={""}
          value={inputData.find((item) => item.title === "w10")?.value || ""}
          onChange={(value) => handleInputChange("w10", value)}
        />
        <Input
          width={"35%"}
          title={"wpn10"}
          placeholder={"I think I am funny"}
          value={inputData.find((item) => item.title === "wpn10")?.value || ""}
          onChange={(value) => handleInputChange("wpn10", value)}
        />
      </FlexItem>
      <Space />
      <CategoryList
        categoriesDataArr={categoriesData}
        Selected={selectedData}
        onSelectionChange={handleSelectionChange}
      />
      <Space />
      <FormTitle headingTitle={"Social"} />
      <SpaceM />
      <Social socialData={socialData} onInputChange={handleSocialInputChange} />
      <Space />
      <ButtonBox onClick={handleSubmit}>
        <h1>Generate README</h1>
      </ButtonBox>
    </FormCompo>
  );
}

export default Form;
