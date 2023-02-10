// import React from "react";
// import {
//   Badge,
//   Button,
//   ButtonGroup,
//   Col,
//   Container,
//   Form,
//   Row,
//   ToggleButton,
//   ToggleButtonGroup,
// } from "react-bootstrap";

// type Props = {};

// const Form = (props: Props) => {
//   return (
//     <>
//       <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Full Name</Form.Label>
//           <Form.Control
//             type="email"
//             value={userFullName}
//             onChange={(e) => {
//               setUserFullName(e.target.value);
//             }}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Role</Form.Label>
//           <Form.Check>
//             <ToggleButtonGroup
//               type="radio"
//               name="options"
//               // defaultValue={1}
//             >
//               {radios.map((radio, idx) => (
//                 <>
//                   <ToggleButton
//                     key={idx}
//                     id={`radio-${idx}`}
//                     type="radio"
//                     variant={"outline-primary"}
//                     name="radio"
//                     value={radio.value}
//                     checked={userProfileRadioValue === radio.value}
//                     onChange={(e) =>
//                       setUserProfileRadioValue(e.currentTarget.value)
//                     }
//                   >
//                     {radio.name}
//                   </ToggleButton>
//                 </>
//               ))}
//             </ToggleButtonGroup>
//           </Form.Check>
//         </Form.Group>
//       </Form>
//       {/* <div className="mb-3">
//                   <label for="exampleInputEmail1" className="form-label">Agency Name</label>
//                   <input type="text" className="form-control" id="agency-name" aria-describedby="emailHelp" placeholder="ex. Aurora">
//                 </div>
//                 <div className="mb-3">
//                   <label for="exampleInputEmail1" className="form-label">Location</label>
//                   <input type="text" className="form-control" id="agency-location" aria-describedby="emailHelp" placeholder="ex. Vancouver, BC">
//                 </div>
//                 <div className="mb-3">
//                   <label for="exampleInputEmail1" className="form-label">Phone Number</label>
//                   <input type="text" className="form-control" id="agency-phone" aria-describedby="emailHelp" placeholder="xxx-xxx-xxxx">
//                 </div>
//                 <div className="mb-3">
//                   <label for="exampleInputEmail1" className="form-label">Website</label>
//                   <input type="text" className="form-control" id="agency-website" aria-describedby="emailHelp" placeholder="ex. https://..">
//                 </div>
//                 <div className="mb-3">
//                   <label for="exampleInputEmail1" className="form-label">Email</label>
//                   <input type="email" className="form-control" id="agency-email" aria-describedby="emailHelp" placeholder="ex. asd@example.com">
//                 </div>
//                 <div className="mb-3">
//                   <label for="exampleInputEmail1" className="form-label">Bio</label>
//                   <textarea type="text" className="form-control" id="agency-bio" aria-describedby="emailHelp" placeholder="ex. We are working with ..."></textarea>
//                 </div>
//                 <div className="mb-3">
//                   <label for="exampleInputEmail1" className="form-label">Logo</label>
//                   <input type="text" className="form-control" id="agency-logo" aria-describedby="emailHelp" placeholder="https://..">
//                 </div>
//                 <div className="mb-3">
//                   <label for="exampleInputEmail1" className="form-label">Since</label>
//                   <input type="number" className="form-control" id="agency-since" aria-describedby="emailHelp" placeholder="ex. 2000">
//           </div> */}
//     </>
//   );
// };

// export default Form;
