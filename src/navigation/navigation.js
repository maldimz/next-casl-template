import path from "@/configs/path"

const navigation = [
    {
        title: 'Dashboard Admin',
        // icon: <BarChart />,
        link: path.pathDashboardAdmin,
    },
    {
        title: 'Dashboard Monitoring',
        // icon: <BarChart />,
        link: path.pathMonitoring,
        // acl setting
        action: 'read',
        subject: 'monitoring',
    },
]

export default navigation