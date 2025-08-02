import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-x-neutral-900 pb-20">
      <h2 className="my-10 text-center text-3xl">Contactez-moi </h2>
      <div className="text-center tracking-tighter ">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.PhoneNo}</p>
        <a href="#" className="border-b">{CONTACT.email}</a>
        <p className="my-4 hover:text-red-400">#freepalestine🍉</p>


      </div>
    </div>
  )
}

export default Contact
