// import the Spark JavaScript
import spark from "@sparkdesignsystem/spark/es5/spark";
import sparkPrerender from "@sparkdesignsystem/spark/es5/sparkPrerender";
// optional (see below)
import "@sparkdesignsystem/spark/es5/sparkPolyfills";
// import the Spark CSS
import "@sparkdesignsystem/spark";
// initialize Spark
sparkPrerender();
spark();

import "./style.scss"
