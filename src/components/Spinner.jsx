import { PuffLoader } from 'react-spinners'

const override = {
    display : 'block',
    margin : '100px auto'
}
 const Spinner = ({ loading }) => {
   return (
    <PuffLoader
      color='#409209'
      loading={loading}
      cssOverride={override}
      size={150}
    />
   )
 }
 
 export default Spinner