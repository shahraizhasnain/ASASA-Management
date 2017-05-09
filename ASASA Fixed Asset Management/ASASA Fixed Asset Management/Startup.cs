using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ASASA_Fixed_Asset_Management.Startup))]
namespace ASASA_Fixed_Asset_Management
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
