import Business from './Bizz'; 


function BusinessList({bizzList}) {
  const businessList = bizzList.map(bizz => <Business businessObject={bizz} key={bizz.id} />);
  return (<div className="businessList">{businessList}</div>); 
}

export default BusinessList; 
