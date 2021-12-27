# Managing users in Cloud Identity (manually and automated) (Part 1)

## Resource Hiearchy

> The purpose of the Google Cloud resource hierarchy is two-fold:

> Provide a hierarchy of ownership, which binds the lifecycle of a resource to its immediate parent in the hierarchy.

> Provide attach points and inheritance for access control and organization policies.

> Google Workspace and Cloud Identity customers have access to additional features of the Google Cloud resource hierarchy that provide benefits such as centralized visibility and control, and further grouping mechanisms, such as folders.

> When a user with a Google Workspace or Cloud Identity account creates a Google Cloud Project, an Organization resource is automatically provisioned for them.

> A Google Workspace or Cloud Identity account can have exactly one Organization provisioned with it. Once an Organization resource is created for a domain, all Google Cloud projects created by members of the account domain will by default belong to the Organization resource. When a managed user creates a project, the requirement is that it must be in some organization. If a user specifies an organization and they have the right permissions, the project is assigned to that organization. Otherwise, it will default to the organization the user is associated with. It is impossible to create a project that isn't associated with an organization.

> The Google Workspace super admin is the individual responsible for domain ownership verification and the contact in cases of recovery. For this reason, the Google Workspace super admin is granted the ability to assign IAM roles by default. The Google Workspace super admin’s main duty with respect to Google Cloud is to assign the Organization Administrator IAM role to appropriate users in their domain.

> With an Organization resource, projects belong to your organization instead of the employee who created the project. This means that the projects are no longer deleted when an employee leaves the company; instead they will follow the organization’s lifecycle on Google Cloud.

> Furthermore, organization administrators have central control of all resources. They can view and manage all of your company's projects. This enforcement means that there can no longer be shadow projects or rogue admins.

> Also, you can grant roles at the organization level, which are inherited by all projects and folders under the Organization resource. For example, you can grant the Network Admin role to your networking team at the organization level, allowing them to manage all the networks in all projects in your company, instead of granting them the role for all individual projects.

> The effective policy for a resource is the union of the policy set on the resource and the policy inherited from its ancestors. This inheritance is transitive. In other words, resources inherit policies from the project, which inherit policies from the organization. Therefore, the organization-level policies also apply at the resource level.

[Resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy)

[identity management](idm.png)

## Google Workspace or Cloud Identity

In order to follow along, one will need to start with a new DNS domain, e.g., created through GoDaddy. 

> How teams of all sizes connect, create, and collaborate. A flexible, innovative solution for people and organizations to achieve more.

[Google Workspace](https://workspace.google.com/)

> User lifecycle management, directory services, account security, single sign-on, device management and more in one simple integrated solution

[Cloud Identity](https://workspace.google.com/signup/gcpidentity/welcome)

Will automatically, kick one into a checklist wizard in Cloud Console, IAM & Admin > Identity & Organization. 
