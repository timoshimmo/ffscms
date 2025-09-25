import React from 'react';

const RegisterForm = () => {

    return (

             <div className="tt-widget" style={{ height: 950, zIndex: 10, marginTop: 90 }}>
                    <div className="tt-widget-fallback" style={{ height: 950 }}>
                        <iframe src="https://widget.tix.africa/ffssummit/VXNlci0wMzk4MmU2ZS1lY2Y5LTRjZTgtYTVmZS0zZWRlY2Q2YmY3ZGY=" style={{ width:"100%", height:"100%", border:"none" }} title="Ticket Widget">
                        </iframe>
                    </div>
                    <script src="https://widget.tix.africa/widget.js" data-url="https://widget.tix.africa/ffssummit/VXNlci0wMzk4MmU2ZS1lY2Y5LTRjZTgtYTVmZS0zZWRlY2Q2YmY3ZGY=">
                    </script>
                </div>
            
        
    );
}

export default RegisterForm;