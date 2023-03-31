document.addEventListener("DOMContentLoaded", (ev) => {
    document.getElementById("recent-orders--table").appendChild(buildTableBody());
  });
  
  const buildTableBody = () => {
    const recentOrderData = RECENT_ORDER_DATA;
  
    const tbody = document.createElement("tbody");
  
    let bodyContent = "";
    for (const row of recentOrderData) {
      bodyContent += `
        <tr>
          <td>${row.date}</td>
          <td>${row.reedem}</td>
          <td>${row.ref}</td>
          <td class="${row.statusColor}">${row.status}</td>
          <td class="primary">Details</td>
        </tr>
      `;
    }
  
    tbody.innerHTML = bodyContent;
  
    return tbody;
  };