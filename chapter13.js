/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
  var output = "<table>\n";
  var properties = Object.keys(data[0]);
  var n = properties.length;
  
  output += "\t<tr>\n";
  for(var i=0; i < n; i++){
    output += "\t\t<th>" + properties[i] + "</th>\n";
  }
  output += "\n\t</tr>";

  for(var i=0; i<data.length; i++){
    output+="\n\t<tr>\n";
    var object_properties = Object.keys(data[i]);
    var properties_end = object_properties.length;
    for(var j=0; j<properties_end; j++){
      output += "\t\t<td>" + (data[i][object_properties[j]]).toString() + "</td>\n";
    }
    output+= "\n\t</tr>";
  }
  output+="\n</table>";

  return output;
}


// Do not modify below here.
module.exports = { buildTable };
