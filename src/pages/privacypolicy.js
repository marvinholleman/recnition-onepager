import React from "react"

import styled from "styled-components"

import "../theme/index.css"

import Button from "../components/common/button"

class PrivacyPolicy extends React.Component {
  render() {
    return (
      <MainContainer class="main-container">
        <TextContainer class="text-container">
          <strong>Privacy Policy</strong>
          <p>
            Recnition built the Recnition app as a Commercial app. This SERVICE
            is provided by Recnition and is intended for use as is.
          </p>
          <p>
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use our Service.
          </p>
          <p>
            If you choose to use our Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that we collect is used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
          </p>
          <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which is accessible at Recnition unless
            otherwise defined in this Privacy Policy.
          </p>
          <strong>Information Collection and Use</strong>
          <p>
            For a better experience, while using our Service, we may require you
            to provide us with certain personally identifiable information,
            including but not limited to Username, First Name and Last Name. The
            information that we request will be retained by us and used as
            described in this privacy policy.
          </p>
          <div>
            <p>
              The app uses{" "}
              <a
                href="https://www.google.com/policies/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play Services
              </a>{" "}
              that may collect information used to identify you.
            </p>
          </div>
          <strong>Camera Permissions</strong>
          <p>
            For certain features of the App and our Service, we may request
            Camera permissions. After giving consent, the Camera and Gallery of
            the device may then be used to upload images to our Service for
            further processing. User uploaded images are temporarily stored for
            a maximum of 24 hours. After the user-requested process is
            completed, the image is deleted from the Service database. If Camera
            permissions consent is not given or revoked, the user may not be
            able to use certain features within the app that rely on Camera
            functionality.
          </p>
          <strong>Storage Permissions</strong>
          <p>
            For certain features of the App and our Service, we may request
            Storage permissions. After giving consent, the Storage of the device
            may then be used to write and read persistent data. This is needed
            for main functionality of the app. If Storage permissions consent is
            not given or revoked, the user may not be able to use certain
            features within the app that rely on Storage functionality.
          </p>
          <strong>Location Permissions</strong>
          <p>
            For certain features of the App and our Service, we may request
            Location permissions. After giving consent, the Location Service of
            the Android OS will be used to determine the status of the network.
            The app uses this permission to determine the name of the connected
            wifi-network and not for requesting or saving the user's location.
            If Location permissions consent is not given or revoked, the user
            may not be able to use certain features within the app that rely on
            Location functionality.
          </p>
          <strong>Log Data</strong>
          <p>
            We want to inform you that whenever you use our Service, in a case
            of an error in the app we collect data and information (through
            third party products) on your phone called Log Data. This Log Data
            may include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the app when utilizing our Service, the time and date of your use of
            the Service, and other statistics.
          </p>
          <strong>Cookies</strong>
          <p>
            Cookies are files with a small amount of data that are commonly used
            as anonymous unique identifiers. These are sent to your browser from
            the websites that you visit and are stored on your device's internal
            memory.
          </p>
          <p>
            This Service does not use these “cookies” explicitly. However, the
            app may use third party code and libraries that use “cookies” to
            collect information and improve their services. You have the option
            to either accept or refuse these cookies and know when a cookie is
            being sent to your device. If you choose to refuse our cookies, you
            may not be able to use some portions of this Service.
          </p>
          <strong>Service Providers</strong>
          <p>
            We may employ third-party companies and individuals due to the
            following reasons:
          </p>
          <ul>
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <p>
            We want to inform users of this Service that these third parties
            have access to your Personal Information. The reason is to perform
            the tasks assigned to them on our behalf. However, they are
            obligated not to disclose or use the information for any other
            purpose.
          </p>
          <strong>Security</strong>
          <p>
            We value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </p>
          <strong>Links to Other Sites</strong>
          <p>
            This Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by us. Therefore, we strongly advise
            you to review the Privacy Policy of these websites. We have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </p>
          <strong>Children’s Privacy</strong>
          <p>
            These Services do not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from children
            under 13. In the case we discover that a child under 13 has provided
            us with personal information, we immediately delete this from our
            servers. If you are a parent or guardian and you are aware that your
            child has provided us with personal information, please contact us
            so that we will be able to do necessary actions.
          </p>
          <strong>Changes to This Privacy Policy</strong>
          <p>
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on this
            page.
          </p>
          <p>This policy is effective as of 2020-12-01</p>
          <strong>Contact Us</strong>
          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at contact@recnition.com.
          </p>
        </TextContainer>
      </MainContainer>
    )
  }
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #2c2d31;
  flex-direction: column;
  color: white;
`

const TextContainer = styled.div`
  max-width: 50rem;
  padding: 2rem 5rem 5rem 5rem;
  font-size: 0.8rem;
`

export default PrivacyPolicy
