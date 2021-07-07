import { useEffect } from 'react';

function Message({ size }) {
    const [ sizeClass, setSizeClass ] = useState("");

    useEffect(() => {
        console.log('Message', size);
        let cName = '';
        switch (size) {
          case 'm':
            cName = 'medium'
            break;
          case 'l':
            cName = 'large'
            break;
          case 'xl':
            cName = 'xlarge'
            break;
          default:
            cName = 'small'
            break;
        }
        setSizeClass(cName)
    }, [size] )


    return (
        <div className={`medium ${sizeClass}`}>
            (Oh my! Your bird is naked!)
        </div>
    );
};

export default Message;
