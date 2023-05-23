import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../config/firebase"

const handleSubmit = (testdata) => {
    const ref = collection(firestore, "posts") // Firebase creates this automatically

    let data = {
        testData: testdata
    }

    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
}

export default handleSubmit