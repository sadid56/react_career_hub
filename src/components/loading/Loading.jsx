import { BallTriangle } from  'react-loader-spinner'
const Loading = () => {
  return (
    <div className='flex justify-center  mt-24 md:mt-60'>
   <div>
   <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
   </div>
    </div>
  );
};

export default Loading;
