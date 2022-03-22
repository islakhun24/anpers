
import { SkewLoader } from  'react-spinners'

    const Loader = () => (
        <div className='fixed bg-white top-0 left-0 w-screen h-screen flex items-center justify-center' style={{
            zIndex: 13301
        }}>
            <SkewLoader size={40}  color='#0D51A2' />
        </div>
    );
    
    export default Loader;