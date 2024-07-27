/** @format */

export default function InputFrom({
  css,
  placeholder,
  name,
  onChange,
  value,
  type,
}) {
  return (
    <>
      <input
        type={type || "text"}
        placeholder={placeholder}
        className={css}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  )
}
