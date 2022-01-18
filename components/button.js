const Btn = ({ Icon, href, name, AriaLabel = "" }) => {
  return (
    <a href={href} name={name} target='_blank' rel="noreferrer" aria-label={AriaLabel}>
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