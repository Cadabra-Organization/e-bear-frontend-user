function Custom(props) {

  return (
    <table border={1}>
        <tr>
            <td>이름</td>
            <td>아이디</td>
            <td>닉네임</td>
            <td>비고</td>
        </tr>
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.id}</td>
            <td>{props.data.nickname}</td>
            <td>{props.data.etc}</td>
        </tr>
    </table>
  )
}

export default Custom

