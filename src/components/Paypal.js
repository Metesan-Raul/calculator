import React, {useState,useRef,useEffect} from 'react';


function Paypal() {
    const [paidFor,setPaidFor]=useState(false);
    const [loaded,setLoaded]=useState(false);
    
    let paypalRef = useRef();
    const product = {
        price:0
    };
    
    useEffect(() =>
    {
    const script = document.createElement("script");
    script.src="https://www.paypal.com/sdk/js?client-id=AbbpDZ8jxgomMRrm8iuj--v57dtpi0Yubt-QG8Sf-CVtWZHa1PCpx2QESc7rRYTMxRc4ueZdsxecXL3k";
    script.addEventListener("load",()=>setLoaded(true));
    document.body.appendChild(script);
    if(loaded)
    {
        setTimeout(()=>{
            window.paypal.Buttons({
            createOrder:(data,actions)=>{
                return actions.order.create({
                purchase_units:[
                    {
                        description: product.description,
                        amount:{
                            currency_code: "USD",
                            value: product.price
                        }
                    }
                ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                setPaidFor(true);
                console.log(order);
            },
            })
            .render(paypalRef);
        })
    }
    });
    return (
     <div>
         { paidFor ? (
         <div>
            <h1>Iți mulțumesc, din cauza oamenilor ca tine reușesc să îmi duc munca mai departe</h1>
         </div>
    
         ) : (
            <div className="d-flex justify-content-around">
            <h3>Dorești să îmi cumperi o cafea?  </h3>
            
            
            <div ref={v => (paypalRef = v)} />
            </div>
         )}
     </div>
     );
    
    }
    
    export default Paypal;