/** @format */

export default function Modal({children}) {
  return (
    <div className="w-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
      {children}
    </div>
  )
}
