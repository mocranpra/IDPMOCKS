import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: '3f8b373d-82ee-4e8f-aee4-baef78f45ee2',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=3f8b373d-82ee-4e8f-aee4-baef78f45ee2&groupId=80341867-c2f8-41d8-8c92-ed42fd7dccc2&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLWVhc3QtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMWNlZjlhNTktNjJlYy00MThhLTk2NjYtMmIzYWZjMmQyY2IwLyIsImlhdCI6MTY1MzU2NTMxNywibmJmIjoxNjUzNTY1MzE3LCJleHAiOjE2NTM1NzAzMDAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFRS1I2SkxXL1ZvQ2g0UnF1bGFLbGhBVHI1ZVB2QkNKRmJNTk9PcFdHUU9NMVRNRXlJVGlwTURsU0dpZXNkWm1reWVKaVF3T3ZlTmtlMjhjejNPNlVUTEN0NUFqRHFqR0NyUlJpZjloMCtqbz0iLCJhbXIiOlsicHdkIiwicnNhIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZGV2aWNlaWQiOiI4MTIzY2VmNC0xOTVkLTRjYzUtOGVmZi1lMmM4YzQ4ZDA3MmYiLCJmYW1pbHlfbmFtZSI6Ik9jcmFuIiwiZ2l2ZW5fbmFtZSI6Ik1hcmllIExvdWlzZSIsImlwYWRkciI6IjQ3LjE4OC4xNDYuMTQzIiwibmFtZSI6Ik9jcmFuLCBNYXJpZSBMb3Vpc2UiLCJvaWQiOiI3ZTcwMWY0Yi05NmM5LTRjNGUtYWQwNy1lMTJkNzE3NGY1ZmQiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMTE3NjEzNTU0MC0xNjc1ODA5MTItNTM4MjcyMjEzLTQ0NTA0NiIsInB1aWQiOiIxMDAzMjAwMTZGQThFRTMzIiwicmgiOiIwLkFRNEFXWnJ2SE94aWlrR1daaXM2X0Mwc3NBa0FBQUFBQUFBQXdBQUFBQUFBQUFBT0FQby4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsiZHZjX21uZ2QiLCJkdmNfZG1qZCIsImttc2kiXSwic3ViIjoiS2NqbGVpWDVjb29lc0F4cXNzRnBadVJ3UzBubHgxOU1MVFozOXllWDRkWSIsInRpZCI6IjFjZWY5YTU5LTYyZWMtNDE4YS05NjY2LTJiM2FmYzJkMmNiMCIsInVuaXF1ZV9uYW1lIjoiT2NyYW5NYXJpZUxvdWlzZUBwcmFpbnRsLmNvbSIsInVwbiI6Ik9jcmFuTWFyaWVMb3Vpc2VAcHJhaW50bC5jb20iLCJ1dGkiOiJmUGZZY3VVRnkwMkUzMnVKd3lFZkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.Dp6gMU-vBrZrjtXIJ3bV4EMEmgytPbh0ctDGrE-XWNzV1DguMJXjtXPTXeAtC5M8PjBW_VMAPKBE-jMj7TQxdxwprX4Mbp_isPhLhg339PNRVUfQENRdVr4xKdgvmldA97oEStF9S_fgIG-Ou8slnDKpEcjxOkHrKByS63hAWs0IwYDm2pnsg3yVODKWd5f93WEQxPXRKJOENSoJYzT9CamUhkd0v1QMlCGXpPfWEFjvSQlxK1wJX3dq4T_O0sAEFUXrE6kNE4qe1xajO4srDp8dd43K23NWqXOdv786XlDf7zbhqKu8vkGS2ohEMZyNOOh2XRP2JXFbk0hK8TbGkg',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;