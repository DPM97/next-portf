const Btn = ({ Icon, href }) => {
  return (
    <a href={href} target='_blank' rel="noreferrer">
      <div style={{
        borderRadius: '0.5rem',
        width: '40px',
        height: '40px',
        backgroundColor: '#2e2e2e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '3px'
      }}>
        <Icon style={{ fontSize: '30px', color: '#f0f0f0' }} />
      </div>
    </a>
  )
}

export default Btn