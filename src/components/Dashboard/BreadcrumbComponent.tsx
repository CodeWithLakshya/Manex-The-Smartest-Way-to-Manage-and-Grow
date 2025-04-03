"use client"
import { More, NavigateNext } from '@mui/icons-material';
import { Breadcrumbs, Link } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const BreadcrumbComponent: React.FC = () => {
    const pathname = usePathname();
    const [pathSegments, setPathSegments] = useState<string[]>([]);

    useEffect(() => {
        const segments = pathname.split('/').filter(segment => segment);
        setPathSegments(segments);
    }, [pathname]);

    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ paddingBottom: 1, }} separator={<NavigateNext fontSize="small" />}>
            {pathSegments.map((segment, index) => {
                const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
                return (
                    <Link key={url} href={url} sx={{ textDecoration: 'none', color: 'textPrimary', '&:hover': { textDecoration: 'none', color: 'hoverText', backgroundColor: 'hoverBackground' } }}>
                        {segment === 'v1' ? 'Dashboard' : segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase()}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};

export default BreadcrumbComponent;