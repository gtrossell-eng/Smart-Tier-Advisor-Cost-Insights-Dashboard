export const calculateCost = (hotGB, coolGB, archiveGB, reads) => {
    const hotCost = hotGB * 0.0184
    const coolCost = coolGB * 0.01
    const archiveCost = archiveGB * 0.00099
    const accessCost = reads * 0.004
  
    const monthly = hotCost + coolCost + archiveCost + accessCost
    const yearly = monthly * 12
  
    return { monthly, yearly }
  }