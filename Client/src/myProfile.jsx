

var MyCompleteProfile = ()=>{
 <>
 My Profile 
 <br/> 
 <img></img>
 <br/>
 <name>Kadynce Krank</name>
 <age>21</age>
 <weight>150lbs</weight>
 <gender>male</gender>
 <intent>fug</intent>
 </>
}
var MyNewProfile = ()=> {
return (
  <>
  My Profile 
  <br/>
  <img></img>
  <br/>
    <label for='name'> First Name</label>
    <input name='name'></input>
    <br/>
    <label for='LastName'> Last Name</label>
    <input name='LastName'></input>
    <br/>
    <label for='attraction-type'> attraction-type</label>
    <input name='attraction-type'></input>
    <br/>
    <label for='weight'> weight</label>
    <input name='weight'></input>
    <br/>
    <label for='gender'> gender</label>
    <input name='gender'></input>
    <br/>
    <label for='intent'> intent</label>
    <input name='intent'></input>
  </>
)
}

export default MyNewProfile;
