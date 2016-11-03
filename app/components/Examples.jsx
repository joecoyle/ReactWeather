var React = require ('react');
var {Link} = require ('react-router');
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are some example locations to test out</p>
      <ol>
        <li><Link to="/?location=Manchester">Manchester</Link></li>
        <li><Link to="/?location=Tokyo">Tokyo</Link></li>
      </ol>
    </div>  )
};


module.exports = Examples;
