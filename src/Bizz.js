function Business({businessObject, key}) {
  console.log(businessObject); 
  const name = businessObject.name; 
  const imageUrl = businessObject.image_url; 
  const zipCode = businessObject.location.zip_code; 
  const city = businessObject.location.city; 
  const state = businessObject.location.state; 
  const address = businessObject.location.address1; 
  const reviewCount = businessObject.review_count; 
  const rating = businessObject.rating; 
  const category = businessObject.categories[0].title; 
  

  return (<div className="business" key={`bizz${key}`}>
<table>
<thead>
  <tr>
    <th colspan="2"><img src={imageUrl} alt={category} width="350px"/></th>
    </tr>
    <tr>
    <th colspan="2">{name}</th>
    </tr>
</thead>
<tbody>
  <tr>
    <td>{address}</td>
    <td className='gold right'>{category.toUpperCase()}</td>
  </tr>
  <tr>
    <td>{city}</td>
    <td className='gold right'>{rating} stars</td>
  </tr>
  <tr>
    <td>{state} {zipCode}</td>
    <td className='right'>{reviewCount} reviews</td>
  </tr>
</tbody>
</table>
</div>); 
}

export default Business; 