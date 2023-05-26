const index = () => {
    return (
        <div>Monitoring</div>
    )
}

// set page acl
index.acl = {
    action: 'read',
    subject: 'monitoring'
}

export default index