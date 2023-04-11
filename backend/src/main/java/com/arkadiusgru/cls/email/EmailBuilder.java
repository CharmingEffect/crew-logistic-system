package com.arkadiusgru.cls.email;

import org.springframework.stereotype.Service;

@Service
public class EmailBuilder {
    String link = "http://localhost:8080/api/v1/recover/";
    public String recoverEmail(String name, String tempPass) {
       
        String myvar = "<!DOCTYPE html>" +
                "<html" +
                "  lang=\"en\"" +
                "  xmlns:v=\"urn:schemas-microsoft-com:vml\"" +
                "  xmlns:o=\"urn:schemas-microsoft-com:office:office\"" +
                ">" +
                "  <head>" +
                "    <meta charset=\"utf-8\" />" +
                "    <meta name=\"x-apple-disable-message-reformatting\" />" +
                "    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\" />" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />" +
                "    <meta" +
                "      name=\"format-detection\"" +
                "      content=\"telephone=no, date=no, address=no, email=no\"" +
                "    />" +
                "    <title>Confirm your email address</title>" +
                "    <style>" +
                "      .hover-bg-blue-600:hover {" +
                "        background-color: #2563eb !important;" +
                "      }" +
                "      .hover-underline:hover {" +
                "        text-decoration: underline !important;" +
                "      }" +
                "      .hover-no-underline:hover {" +
                "        text-decoration: none !important;" +
                "      }" +
                "      @media (max-width: 600px) {" +
                "        .sm-leading-32 {" +
                "          line-height: 32px !important;" +
                "        }" +
                "        .sm-px-24 {" +
                "          padding-left: 24px !important;" +
                "          padding-right: 24px !important;" +
                "        }" +
                "        .sm-w-full {" +
                "          width: 100% !important;" +
                "        }" +
                "      }" +
                "    </style>" +
                "  </head>" +
                "  <body" +
                "    style=\"" +
                "      margin: 0;" +
                "      padding: 0;" +
                "      width: 100%;" +
                "      word-break: break-word;" +
                "      -webkit-font-smoothing: antialiased;" +
                "      background-color: #f3f4f6;" +
                "    \"" +
                "  >" +
                "    <div style=\"display: none\">" +
                "      Please confirm your email address in order to activate your account͏" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "    </div>" +
                "    <div" +
                "      role=\"article\"" +
                "      aria-roledescription=\"email\"" +
                "      aria-label=\"Confirm your email address\"" +
                "      lang=\"en\"" +
                "    >" +
                "      <table" +
                "        style=\"" +
                "          font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI'," +
                "            sans-serif;" +
                "          width: 100%;" +
                "        \"" +
                "        cellpadding=\"0\"" +
                "        cellspacing=\"0\"" +
                "        role=\"presentation\"" +
                "      >" +
                "        <tr>" +
                "          <td align=\"center\" style=\"background-color: #f3f4f6\">" +
                "            <table" +
                "              class=\"sm-w-full\"" +
                "              style=\"width: 600px\"" +
                "              cellpadding=\"0\"" +
                "              cellspacing=\"0\"" +
                "              role=\"presentation\"" +
                "            >" +
                "              <tr>" +
                "                <td align=\"center\" class=\"sm-px-24\">" +
                "                  <table" +
                "                    style=\"width: 100%\"" +
                "                    cellpadding=\"0\"" +
                "                    cellspacing=\"0\"" +
                "                    role=\"presentation\"" +
                "                  >" +
                "                    <tr>" +
                "                      <td" +
                "                        class=\"sm-px-24\"" +
                "                        style=\"" +
                "                          background-color: #ffffff;" +
                "                          border-radius: 4px;" +
                "                          font-size: 16px;" +
                "                          line-height: 24px;" +
                "                          padding: 48px;" +
                "                          text-align: left;" +
                "                          color: #1f2937;" +
                "                        \"" +
                "                      >" +
                "                        <p>Dear " + name + "</p>" +
                "                        <p" +
                "                          class=\"sm-leading-32\"" +
                "                          style=\"" +
                "                            font-weight: 600;" +
                "                            font-size: 24px;" +
                "                            margin: 0;" +
                "                            margin-bottom: 24px;" +
                "                            color: #000000;" +
                "                          \"" +
                "                        >" +
                "                         Thank you for joinning to Pinnacle Crew" +
                "                        </p>" +
                "                        <p style=\"margin: 0; margin-bottom: 24px\" id=\"message\">" +

                "                          This is your temporary password: " + "<strong>" + tempPass + "</strong>"
                + "<br></br>" +
                "                          Ones you log in please change it to your own" +
                "                        </p>" +
                "                        <p style=\"margin: 0; margin-bottom: 24px\" id=\"message\">" +

                "                          Please active your account by clicking the" +
                "                          button below" +
                "                        </p>" +
                "                        <div style=\"line-height: 100%\">" +
                "                          <a" +
                "                            href=\"" + link + "\"" +
                "                            id=\"click-confirm\"" +
                "                            class=\"hover-bg-blue-600\"" +
                "                            style=\"" +
                "                              background-color: #3b82f6;" +
                "                              border-radius: 4px;" +
                "                              display: inline-block;" +
                "                              font-weight: 600;" +
                "                              font-size: 16px;" +
                "                              padding-top: 16px;" +
                "                              padding-bottom: 16px;" +
                "                              padding-left: 24px;" +
                "                              padding-right: 24px;" +
                "                              text-align: center;" +
                "                              color: #ffffff;" +
                "                              text-decoration: none;" +
                "                            \"" +
                "                          >" +
                "                            <!--[if mso" +
                "                              ]><i" +
                "                                style=\"" +
                "                                  letter-spacing: 24px;" +
                "                                  mso-font-width: -100%;" +
                "                                  mso-text-raise: 30px;" +
                "                                \"" +
                "                                > </i" +
                "                              ><!" +
                "                            [endif]-->" +
                "                            <span style=\"mso-text-raise: 16px\"" +
                "                              >Activate your account →</span" +
                "                            >" +
                "                            <!--[if mso" +
                "                              ]><i" +
                "                                style=\"" +
                "                                  letter-spacing: 24px;" +
                "                                  mso-font-width: -100%;" +
                "                                \"" +
                "                                > </i" +
                "                              ><!" +
                "                            [endif]-->" +
                "                          </a>" +
                "                        </div>" +
                "                        <table" +
                "                          style=\"width: 100%\"" +
                "                          cellpadding=\"0\"" +
                "                          cellspacing=\"0\"" +
                "                          role=\"presentation\"" +
                "                        >" +
                "                          <tr>" +
                "                            <td style=\"padding-top: 32px; padding-bottom: 32px\">" +
                "                              <div" +
                "                                style=\"" +
                "                                  background-color: #e5e7eb;" +
                "                                  height: 1px;" +
                "                                  line-height: 1px;" +
                "                                \"" +
                "                              >" +
                "                                ‌" +
                "                              </div>" +
                "                            </td>" +
                "                          </tr>" +
                "                        </table>" +
                "                        <p style=\"margin: 0; margin-bottom: 16px\">" +
                "                          Not sure why you received this email? Please" +
                "                          <a" +
                "                            href=\"https://example.com\"" +
                "                            class=\"hover-no-underline\"" +
                "                            style=\"color: #3b82f6; text-decoration: underline\"" +
                "                            >let us know</a" +
                "                          >." +
                "                        </p>" +
                "                        <p style=\"margin: 0; margin-bottom: 16px\">" +
                "                          Thanks, <br />The Pinnacle Crew Team" +
                "                        </p>" +
                "                      </td>" +
                "                    </tr>" +
                "                    <tr>" +
                "                      <td style=\"height: 48px\"></td>" +
                "                    </tr>" +
                "                    <tr>" +
                "                      <td" +
                "                        style=\"" +
                "                          font-size: 12px;" +
                "                          padding-left: 24px;" +
                "                          padding-right: 24px;" +
                "                          text-align: center;" +
                "                          color: #4b5563;" +
                "                        \"" +
                "                      >" +
                "                        <p" +
                "                          style=\"" +
                "                            margin: 0;" +
                "                            margin-bottom: 4px;" +
                "                            text-transform: uppercase;" +
                "                          \"" +
                "                        >" +
                "                          " +
                "                        </p>" +
                "                        <p style=\"margin: 0; font-style: italic\">" +
                "                           [variable0] " +
                "                          [variable1]" +
                "                        </p>" +
                "                        <p style=\"cursor: default\">" +
                "                          <a" +
                "                            href=\"https://docs.cypress.io/\"" +
                "                            class=\"hover-underline\"" +
                "                            style=\"color: #3b82f6; text-decoration: none\"" +
                "                            >{variable3}</a" +
                "                          >" +
                "                          •" +
                "                          <a" +
                "                            href=\"https://github.com/cypress-io/cypress\"" +
                "                            class=\"hover-underline\"" +
                "                            style=\"color: #3b82f6; text-decoration: none\"" +
                "                            >{variable4}</a" +
                "                          >" +
                "                          •" +
                "                          <a" +
                "                            href=\"https://twitter.com/cypress_io\"" +
                "                            class=\"hover-underline\"" +
                "                            style=\"color: #3b82f6; text-decoration: none\"" +
                "                            >{variable5}</a" +
                "                          >" +
                "                        </p>" +
                "                      </td>" +
                "                    </tr>" +
                "                  </table>" +
                "                </td>" +
                "              </tr>" +
                "            </table>" +
                "          </td>" +
                "        </tr>" +
                "      </table>" +
                "    </div>" +
                "  </body>" +
                "</html>";

        return myvar;
    }


    public String confirmationEmail(String name, String link, String tempPass) {

        String myvar = "<!DOCTYPE html>" +
                "<html" +
                "  lang=\"en\"" +
                "  xmlns:v=\"urn:schemas-microsoft-com:vml\"" +
                "  xmlns:o=\"urn:schemas-microsoft-com:office:office\"" +
                ">" +
                "  <head>" +
                "    <meta charset=\"utf-8\" />" +
                "    <meta name=\"x-apple-disable-message-reformatting\" />" +
                "    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\" />" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />" +
                "    <meta" +
                "      name=\"format-detection\"" +
                "      content=\"telephone=no, date=no, address=no, email=no\"" +
                "    />" +
                "    <title>Confirm your email address</title>" +
                "    <style>" +
                "      .hover-bg-blue-600:hover {" +
                "        background-color: #2563eb !important;" +
                "      }" +
                "      .hover-underline:hover {" +
                "        text-decoration: underline !important;" +
                "      }" +
                "      .hover-no-underline:hover {" +
                "        text-decoration: none !important;" +
                "      }" +
                "      @media (max-width: 600px) {" +
                "        .sm-leading-32 {" +
                "          line-height: 32px !important;" +
                "        }" +
                "        .sm-px-24 {" +
                "          padding-left: 24px !important;" +
                "          padding-right: 24px !important;" +
                "        }" +
                "        .sm-w-full {" +
                "          width: 100% !important;" +
                "        }" +
                "      }" +
                "    </style>" +
                "  </head>" +
                "  <body" +
                "    style=\"" +
                "      margin: 0;" +
                "      padding: 0;" +
                "      width: 100%;" +
                "      word-break: break-word;" +
                "      -webkit-font-smoothing: antialiased;" +
                "      background-color: #f3f4f6;" +
                "    \"" +
                "  >" +
                "    <div style=\"display: none\">" +
                "      Please confirm your email address in order to activate your account͏" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "    </div>" +
                "    <div" +
                "      role=\"article\"" +
                "      aria-roledescription=\"email\"" +
                "      aria-label=\"Confirm your email address\"" +
                "      lang=\"en\"" +
                "    >" +
                "      <table" +
                "        style=\"" +
                "          font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI'," +
                "            sans-serif;" +
                "          width: 100%;" +
                "        \"" +
                "        cellpadding=\"0\"" +
                "        cellspacing=\"0\"" +
                "        role=\"presentation\"" +
                "      >" +
                "        <tr>" +
                "          <td align=\"center\" style=\"background-color: #f3f4f6\">" +
                "            <table" +
                "              class=\"sm-w-full\"" +
                "              style=\"width: 600px\"" +
                "              cellpadding=\"0\"" +
                "              cellspacing=\"0\"" +
                "              role=\"presentation\"" +
                "            >" +
                "              <tr>" +
                "                <td align=\"center\" class=\"sm-px-24\">" +
                "                  <table" +
                "                    style=\"width: 100%\"" +
                "                    cellpadding=\"0\"" +
                "                    cellspacing=\"0\"" +
                "                    role=\"presentation\"" +
                "                  >" +
                "                    <tr>" +
                "                      <td" +
                "                        class=\"sm-px-24\"" +
                "                        style=\"" +
                "                          background-color: #ffffff;" +
                "                          border-radius: 4px;" +
                "                          font-size: 16px;" +
                "                          line-height: 24px;" +
                "                          padding: 48px;" +
                "                          text-align: left;" +
                "                          color: #1f2937;" +
                "                        \"" +
                "                      >" +
                "                        <p>Dear " + name + "</p>" +
                "                        <p" +
                "                          class=\"sm-leading-32\"" +
                "                          style=\"" +
                "                            font-weight: 600;" +
                "                            font-size: 24px;" +
                "                            margin: 0;" +
                "                            margin-bottom: 24px;" +
                "                            color: #000000;" +
                "                          \"" +
                "                        >" +
                "                         Thank you for joinning to Pinnacle Crew" +
                "                        </p>" +
                "                        <p style=\"margin: 0; margin-bottom: 24px\" id=\"message\">" +

                "                          This is your temporary password: " + "<strong>" + tempPass + "</strong>"
                + "<br></br>" +
                "                          Ones you log in please change it to your own" +
                "                        </p>" +
                "                        <p style=\"margin: 0; margin-bottom: 24px\" id=\"message\">" +

                "                          Please active your account by clicking the" +
                "                          button below" +
                "                        </p>" +
                "                        <div style=\"line-height: 100%\">" +
                "                          <a" +
                "                            href=\"" + link + "\"" +
                "                            id=\"click-confirm\"" +
                "                            class=\"hover-bg-blue-600\"" +
                "                            style=\"" +
                "                              background-color: #3b82f6;" +
                "                              border-radius: 4px;" +
                "                              display: inline-block;" +
                "                              font-weight: 600;" +
                "                              font-size: 16px;" +
                "                              padding-top: 16px;" +
                "                              padding-bottom: 16px;" +
                "                              padding-left: 24px;" +
                "                              padding-right: 24px;" +
                "                              text-align: center;" +
                "                              color: #ffffff;" +
                "                              text-decoration: none;" +
                "                            \"" +
                "                          >" +
                "                            <!--[if mso" +
                "                              ]><i" +
                "                                style=\"" +
                "                                  letter-spacing: 24px;" +
                "                                  mso-font-width: -100%;" +
                "                                  mso-text-raise: 30px;" +
                "                                \"" +
                "                                > </i" +
                "                              ><!" +
                "                            [endif]-->" +
                "                            <span style=\"mso-text-raise: 16px\"" +
                "                              >Activate your account →</span" +
                "                            >" +
                "                            <!--[if mso" +
                "                              ]><i" +
                "                                style=\"" +
                "                                  letter-spacing: 24px;" +
                "                                  mso-font-width: -100%;" +
                "                                \"" +
                "                                > </i" +
                "                              ><!" +
                "                            [endif]-->" +
                "                          </a>" +
                "                        </div>" +
                "                        <table" +
                "                          style=\"width: 100%\"" +
                "                          cellpadding=\"0\"" +
                "                          cellspacing=\"0\"" +
                "                          role=\"presentation\"" +
                "                        >" +
                "                          <tr>" +
                "                            <td style=\"padding-top: 32px; padding-bottom: 32px\">" +
                "                              <div" +
                "                                style=\"" +
                "                                  background-color: #e5e7eb;" +
                "                                  height: 1px;" +
                "                                  line-height: 1px;" +
                "                                \"" +
                "                              >" +
                "                                ‌" +
                "                              </div>" +
                "                            </td>" +
                "                          </tr>" +
                "                        </table>" +
                "                        <p style=\"margin: 0; margin-bottom: 16px\">" +
                "                          Not sure why you received this email? Please" +
                "                          <a" +
                "                            href=\"https://example.com\"" +
                "                            class=\"hover-no-underline\"" +
                "                            style=\"color: #3b82f6; text-decoration: underline\"" +
                "                            >let us know</a" +
                "                          >." +
                "                        </p>" +
                "                        <p style=\"margin: 0; margin-bottom: 16px\">" +
                "                          Thanks, <br />The Pinnacle Crew Team" +
                "                        </p>" +
                "                      </td>" +
                "                    </tr>" +
                "                    <tr>" +
                "                      <td style=\"height: 48px\"></td>" +
                "                    </tr>" +
                "                    <tr>" +
                "                      <td" +
                "                        style=\"" +
                "                          font-size: 12px;" +
                "                          padding-left: 24px;" +
                "                          padding-right: 24px;" +
                "                          text-align: center;" +
                "                          color: #4b5563;" +
                "                        \"" +
                "                      >" +
                "                        <p" +
                "                          style=\"" +
                "                            margin: 0;" +
                "                            margin-bottom: 4px;" +
                "                            text-transform: uppercase;" +
                "                          \"" +
                "                        >" +
                "                          " +
                "                        </p>" +
                "                        <p style=\"margin: 0; font-style: italic\">" +
                "                           [variable0] " +
                "                          [variable1]" +
                "                        </p>" +
                "                        <p style=\"cursor: default\">" +
                "                          <a" +
                "                            href=\"https://docs.cypress.io/\"" +
                "                            class=\"hover-underline\"" +
                "                            style=\"color: #3b82f6; text-decoration: none\"" +
                "                            >{variable3}</a" +
                "                          >" +
                "                          •" +
                "                          <a" +
                "                            href=\"https://github.com/cypress-io/cypress\"" +
                "                            class=\"hover-underline\"" +
                "                            style=\"color: #3b82f6; text-decoration: none\"" +
                "                            >{variable4}</a" +
                "                          >" +
                "                          •" +
                "                          <a" +
                "                            href=\"https://twitter.com/cypress_io\"" +
                "                            class=\"hover-underline\"" +
                "                            style=\"color: #3b82f6; text-decoration: none\"" +
                "                            >{variable5}</a" +
                "                          >" +
                "                        </p>" +
                "                      </td>" +
                "                    </tr>" +
                "                  </table>" +
                "                </td>" +
                "              </tr>" +
                "            </table>" +
                "          </td>" +
                "        </tr>" +
                "      </table>" +
                "    </div>" +
                "  </body>" +
                "</html>";

        return myvar;
    }


    public String confirmedHtml() {

        String template = "<!DOCTYPE html>" +
                "<html" +
                "  lang=\"en\"" +
                "  xmlns:v=\"urn:schemas-microsoft-com:vml\"" +
                "  xmlns:o=\"urn:schemas-microsoft-com:office:office\"" +
                ">" +
                "  <head>" +
                "    <meta charset=\"utf-8\" />" +
                "    <meta name=\"x-apple-disable-message-reformatting\" />" +
                "    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\" />" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />" +
                "    <meta" +
                "      name=\"format-detection\"" +
                "      content=\"telephone=no, date=no, address=no, email=no\"" +
                "    />" +
                "    <title>Confirm your email address</title>" +
                "    <style>" +
                "      .hover-bg-blue-600:hover {" +
                "        background-color: #2563eb !important;" +
                "      }" +
                "      .hover-underline:hover {" +
                "        text-decoration: underline !important;" +
                "      }" +
                "      .hover-no-underline:hover {" +
                "        text-decoration: none !important;" +
                "      }" +
                "      @media (max-width: 600px) {" +
                "        .sm-leading-32 {" +
                "          line-height: 32px !important;" +
                "        }" +
                "        .sm-px-24 {" +
                "          padding-left: 24px !important;" +
                "          padding-right: 24px !important;" +
                "        }" +
                "        .sm-w-full {" +
                "          width: 100% !important;" +
                "        }" +
                "      }" +
                "    </style>" +
                "  </head>" +
                "  <body" +
                "    style=\"" +
                "      margin: 0;" +
                "      padding: 0;" +
                "      width: 100%;" +
                "      word-break: break-word;" +
                "      -webkit-font-smoothing: antialiased;" +
                "      background-color: #f3f4f6;" +
                "    \"" +
                "  >" +
                "    <div style=\"display: none\">" +
                "      Please confirm your email address in order to activate your account͏" +
                "      " +
                "    </div>" +
                "    <div" +
                "      role=\"article\"" +
                "      aria-roledescription=\"email\"" +
                "      aria-label=\"Confirm your email address\"" +
                "      lang=\"en\"" +
                "    >" +
                "      <table" +
                "        style=\"" +
                "          font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI'," +
                "            sans-serif;" +
                "          width: 100%;" +
                "        \"" +
                "        cellpadding=\"0\"" +
                "        cellspacing=\"0\"" +
                "        role=\"presentation\"" +
                "      >" +
                "        <tr>" +
                "          <td align=\"center\" style=\"background-color: #f3f4f6\">" +
                "            <table" +
                "              class=\"sm-w-full\"" +
                "              style=\"width: 600px\"" +
                "              cellpadding=\"0\"" +
                "              cellspacing=\"0\"" +
                "              role=\"presentation\"" +
                "            >" +
                "              <tr>" +
                "                <td align=\"center\" class=\"sm-px-24\">" +
                "                  <table" +
                "                    style=\"width: 100%\"" +
                "                    cellpadding=\"0\"" +
                "                    cellspacing=\"0\"" +
                "                    role=\"presentation\"" +
                "                  >" +
                "                    <tr>" +
                "                      <td" +
                "                        class=\"sm-px-24\"" +
                "                        style=\"" +
                "                          background-color: #ffffff;" +
                "                          border-radius: 4px;" +
                "                          font-size: 16px;" +
                "                          line-height: 24px;" +
                "                          padding: 48px;" +
                "                          text-align: left;" +
                "                          color: #1f2937;" +
                "                        \"" +
                "                      >" +
                "                        <p></p>" +
                "                        <p" +
                "                          class=\"sm-leading-32\"" +
                "                          style=\"" +
                "                            font-weight: 600;" +
                "                            font-size: 24px;" +
                "                            margin: 0;" +
                "                            margin-bottom: 24px;" +
                "                            color: #000000;" +
                "                          \"" +
                "                        >" +
                "                         Your account has been activated." +
                "                        </p>" +
                "                        <p style=\"margin: 0; margin-bottom: 24px\" id=\"message\">" +
                "                        You can now login to your account" +
                "                          <b></b>" +
                "                        </p>" +
                "                        <div style=\"line-height: 100%\">" +
                "                          <a" +
                "                            href=\"http://localhost:3000/\"" +
                "                            id=\"click-confirm\"" +
                "                            class=\"hover-bg-blue-600\"" +
                "                            style=\"" +
                "                              background-color: #3b82f6;" +
                "                              border-radius: 4px;" +
                "                              display: inline-block;" +
                "                              font-weight: 600;" +
                "                              font-size: 16px;" +
                "                              padding-top: 16px;" +
                "                              padding-bottom: 16px;" +
                "                              padding-left: 24px;" +
                "                              padding-right: 24px;" +
                "                              text-align: center;" +
                "                              color: #ffffff;" +
                "                              text-decoration: none;" +
                "                            \"" +
                "                          >" +
                "                            <!--[if mso" +
                "                              ]><i" +
                "                                style=\"" +
                "                                  letter-spacing: 24px;" +
                "                                  mso-font-width: -100%;" +
                "                                  mso-text-raise: 30px;" +
                "                                \"" +
                "                                > </i" +
                "                              ><!" +
                "                            [endif]-->" +
                "                            <span style=\"mso-text-raise: 16px\"" +
                "                              >Go to login page →</span" +
                "                            >" +
                "                            <!--[if mso" +
                "                              ]><i" +
                "                                style=\"" +
                "                                  letter-spacing: 24px;" +
                "                                  mso-font-width: -100%;" +
                "                                \"" +
                "                                > </i" +
                "                              ><!" +
                "                            [endif]-->" +
                "                          </a>" +
                "                        </div>" +
                "                        <table" +
                "                          style=\"width: 100%\"" +
                "                          cellpadding=\"0\"" +
                "                          cellspacing=\"0\"" +
                "                          role=\"presentation\"" +
                "                        >" +
                "                          <tr>" +
                "                            <td style=\"padding-top: 32px; padding-bottom: 32px\">" +
                "                              <div" +
                "                                style=\"" +
                "                                  background-color: #e5e7eb;" +
                "                                  height: 1px;" +
                "                                  line-height: 1px;" +
                "                                \"" +
                "                              >" +
                "                                ‌" +
                "                              </div>" +
                "                            </td>" +
                "                          </tr>" +
                "                        </table>" +
                "                       " +
                "               " +
                "                      </td>" +
                "                    </tr>" +
                "              " +
                "                  </table>" +
                "                </td>" +
                "              </tr>" +
                "            </table>" +
                "          </td>" +
                "        </tr>" +
                "      </table>" +
                "    </div>" +
                "  </body>" +
                "</html>";

        return template;

    }
}
