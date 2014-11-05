var n=3, b=0;

try{
  var c = n/b;
  if(c==Infinity)
    throw new Error("Error invalid operation")
}catch (err){
  console.log(err);
}
