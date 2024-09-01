export const GOOGLE_AUTHORIZATION_URL = "https://accounts.google.com/o/oauth2/auth"
export const GOOGLE_TOKEN_URI = "https://oauth2.googleapis.com/token"
export const GOOGLE_USER_INFO_URI = "https://www.googleapis.com/oauth2/v2/userinfo"
export const GOOGLE_REDIRECT_URI = "http://localhost:3000/api/v1/oauth/google"
export const GOOGLE_AUTH_SCOPES = "https://mail.google.com/ https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"

export const MICROSOFT_REDIRECT_URI = "http://localhost:3000/api/v1/oauth/microsoft"
export const MICROSOFT_AUTHORIZATION_URL = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize"
export const MICROSOFT_TOKEN_URI = "https://login.microsoftonline.com/common/oauth2/v2.0/token"
export const MICROSOFT_USER_INFO_URI = "https://graph.microsoft.com/v1.0/me"
export const MICROSOFT_AUTH_SCOPES = "openid profile email offline_access User.Read SMTP.Send"
