import { useState } from "react";

const Typing = () => {
    const [typing, setTyping] = useState<string>('');

    const containerStyles: React.CSSProperties = {
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f0f0f',
        padding: '10px'
    }
    return (
        <div style={containerStyles}>
            <input 
                type="text"
                placeholder="Type something...."
                style={{border:'none', padding:'10px', borderRadius:'5px', outline: 'none'}}
                onChange={(e)=>setTyping(e.target.value)}
            />
            <hr style={{color:'green', width:'50%'}}/>
            <textarea value={typing} disabled={true} style={{ height:'30%', width:'30%'}}/>
        </div>
    )
}

export default Typing;