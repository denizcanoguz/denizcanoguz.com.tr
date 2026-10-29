import type { ImgHTMLAttributes } from "react";

// Brand logos served from public/icons:
// Excel, PowerPoint: vscode-icons (MIT) · Power BI, SAP: svg-logos (CC0)
// SQL Server, Kaggle: devicon (MIT)
function brandIcon(src: string, alt: string) {
  const Icon = (props: ImgHTMLAttributes<HTMLImageElement>) => (
    <img src={src} alt={alt} {...props} />
  );
  Icon.displayName = alt;
  return Icon;
}

export const Excel = brandIcon("/icons/excel.svg", "Excel");
export const PowerPoint = brandIcon("/icons/powerpoint.svg", "PowerPoint");
export const PowerBI = brandIcon("/icons/powerbi.svg", "Power BI");
export const Sap = brandIcon("/icons/sap.svg", "SAP");
export const SqlServer = brandIcon("/icons/sqlserver.svg", "SQL Server");
export const Kaggle = brandIcon("/icons/kaggle.svg", "Kaggle");
