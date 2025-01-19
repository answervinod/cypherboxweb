import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BaseSection, GlowBackground } from '../components/shared/BackgroundEffects';
import { useEffect, useState } from 'react';

const DeDaSSection = styled(BaseSection)`
  padding: 6rem 2rem;
  color: white;
  position: relative;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StatTitle = styled.div`
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;
`;

const StatValue = styled.div`
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
  width: 100%;
`;

const StatChange = styled.div`
  color: ${({ isPositive, type }) => {
    if (type === 'bugs') return '#F44336';
    return isPositive ? '#4CAF50' : '#F44336';
  }};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-content: center;
  width: 100%;

  &::before {
    content: '${({ isPositive, type }) => {
      if (type === 'bugs') return '●';
      return isPositive ? '▲' : '▼';
    }}';
  }
`;

const MonitoringSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(43, 16, 85, 0.1);
  border-radius: 4px;
  margin: 0.5rem 0;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${({ value }) => value}%;
  height: 100%;
  background: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 4px;
`;

const MonitoringInfo = styled.div`
  margin-bottom: 1.5rem;
`;

const MonitoringLabel = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const VolumeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin: 0 -0.5rem;
`;

const VolumeCard = styled.div`
  text-align: center;
  min-width: 150px;
  padding: 0.5rem;
`;

const CircleProgress = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  position: relative;
  
  svg {
    transform: rotate(-90deg);
  }

  circle {
    fill: none;
    stroke-width: 8;
    stroke-linecap: round;
    
    &.bg {
      stroke: rgba(43, 16, 85, 0.1);
    }
    
    &.progress {
      stroke: ${({ color }) => color};
      stroke-dasharray: ${({ progress }) => `${progress * 251.2} 251.2`};
      transition: stroke-dasharray 0.5s ease;
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  border-bottom: 1px solid rgba(43, 16, 85, 0.1);
  color: ${({ theme }) => theme.colors.darkPurple};
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid rgba(43, 16, 85, 0.1);
  color: ${({ theme }) => theme.colors.darkPurple};
`;

const StatusIndicator = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ status }) => status === 'Healthy' ? '#4CAF50' : '#FFA000'};
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ status }) => status === 'Healthy' ? '#4CAF50' : '#FFA000'};
  }
`;

const MemorySection = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(43, 16, 85, 0.1);
`;

const MemoryTitle = styled.div`
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const MemoryDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MemoryCircle = styled.div`
  width: 60px;
  height: 60px;
  position: relative;

  svg {
    transform: rotate(-90deg);
  }

  circle {
    fill: none;
    stroke-width: 6;
    stroke-linecap: round;
    
    &.bg {
      stroke: rgba(43, 16, 85, 0.1);
    }
    
    &.progress {
      stroke: ${({ theme }) => theme.colors.lightPurple};
      stroke-dasharray: ${({ progress }) => `${progress * 188.4} 188.4`};
      transition: stroke-dasharray 0.5s ease;
    }
  }
`;

const MemoryInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: 0.9rem;
  line-height: 1.5;
`;

const PingSection = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(43, 16, 85, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PingLabel = styled.div`
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: 1rem;
  font-weight: 500;
`;

const PingValue = styled.div`
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: 1.1rem;
  font-weight: 500;
`;

const VolumeDetails = styled.div`
  text-align: left;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.darkPurple};
  margin-top: 0.5rem;
  padding: 0 0.25rem;
  width: 100%;

  > div {
    white-space: nowrap;
    margin-bottom: 0.25rem;
  }
`;

const TransferRate = styled.div`
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(43, 16, 85, 0.1);
`;

const deviceData = [
  {
    id: 'HDD1',
    raid: 'Mirror',
    path: '/mnt/volume1',
    capacity: '0.57 Tb / 2.24 Tb',
    usedSpace: '1024.16 MB',
    freeSpace: '1269.6 MB',
    usage: 44.65,
    status: 'Healthy'
  },
  {
    id: 'HDD2',
    raid: 'Mirror',
    path: '/mnt/volume2',
    capacity: '4.30 Tb / 5.07 Tb',
    usedSpace: '3099.43 MB',
    freeSpace: '2092.25 MB',
    usage: 59.7,
    status: 'Initializing'
  },
  {
    id: 'HDD3',
    raid: 'Mirror',
    path: '/mnt/volume3',
    capacity: '2.24 Tb / 3.16 Tb',
    usedSpace: '2830.39 MB',
    freeSpace: '405.45 MB',
    usage: 87.47,
    status: 'Healthy'
  },
  {
    id: 'HDD4',
    raid: 'Mirror',
    path: '/mnt/volume4',
    capacity: '7.17 Tb / 9.27 Tb',
    usedSpace: '7193.4 MB',
    freeSpace: '2299.08 MB',
    usage: 75.78,
    status: 'Healthy'
  }
];

const DeDaS = () => {
  const [storageUsed, setStorageUsed] = useState(82.90);
  const [storageOnline, setStorageOnline] = useState(84.05);
  const [volumeUsage, setVolumeUsage] = useState(deviceData.map(d => d.usage));
  const [deviceUsage, setDeviceUsage] = useState(deviceData.map(d => d.usage));
  const [pingValue, setPingValue] = useState(242);
  const memoryTotal = 58.69; // Total RAM in GB
  const [memoryUsage, setMemoryUsage] = useState({
    allocated: 27082.58,  // MB
    inCache: 16064.74,    // MB
    available: 15546.79   // MB
  });
  const [transferRate, setTransferRate] = useState(473);

  useEffect(() => {
    const interval = setInterval(() => {
      setStorageUsed(prev => {
        const newValue = prev + (Math.random() * 2 - 1);
        return Math.min(Math.max(newValue, 70), 85);
      });
      
      setStorageOnline(prev => {
        const newValue = prev + (Math.random() * 2 - 1);
        return Math.min(Math.max(newValue, 70), 85);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVolumeUsage(prev => 
        prev.map(usage => {
          const newValue = usage + (Math.random() * 5 - 2.5);
          return Math.min(Math.max(newValue, 40), 80);
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDeviceUsage(prev => 
        prev.map(usage => {
          const newValue = usage + (Math.random() * 5 - 2.5);
          return Math.min(Math.max(newValue, 40), 80);
        })
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPingValue(prev => {
        const newValue = prev + (Math.random() * 30 - 15);
        return Math.min(Math.max(newValue, 90), 242);
      });
    }, 500); // Update more frequently for ping

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransferRate(prev => {
        const newValue = prev + (Math.random() * 20 - 10);
        return Math.min(Math.max(newValue, 450), 500);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DeDaSSection>
      <GlowBackground />
      <Container>
        <Header>
          <Title>DeDaS</Title>
          <Subtitle>Decentralized Data Storage</Subtitle>
        </Header>
        <StatsGrid>
          <StatCard>
            <StatTitle>Total Revenue</StatTitle>
            <StatValue>$ 42563.82</StatValue>
            <StatChange isPositive>$ 2531.86</StatChange>
          </StatCard>
          <StatCard>
            <StatTitle>Total Users</StatTitle>
            <StatValue>7452</StatValue>
            <StatChange isPositive>377.00</StatChange>
          </StatCard>
          <StatCard>
            <StatTitle>Total Storage</StatTitle>
            <StatValue>605.73 Tb</StatValue>
            <StatChange isPositive={false}>46.62 Tb</StatChange>
          </StatCard>
          <StatCard>
            <StatTitle>Available Storage</StatTitle>
            <StatValue>194.00 Tb</StatValue>
            <StatChange isPositive={false}>29.00 Tb</StatChange>
          </StatCard>
          <StatCard>
            <StatTitle>Bugs Reported</StatTitle>
            <StatValue style={{ color: '#F44336' }}>2</StatValue>
            <StatChange type="bugs">2</StatChange>
          </StatCard>
        </StatsGrid>

        <MonitoringSection>
          <Card>
            <CardTitle>Storage Monitoring</CardTitle>
            <TransferRate>
              Average transfer rate @ {Math.round(transferRate)} mb/s
            </TransferRate>
            <MonitoringInfo>
              <MonitoringLabel>
                <span>Total Used</span>
                <span>{storageUsed.toFixed(2)}%</span>
              </MonitoringLabel>
              <ProgressBar>
                <Progress value={storageUsed} />
              </ProgressBar>
            </MonitoringInfo>
            <MonitoringInfo>
              <MonitoringLabel>
                <span>Total Online</span>
                <span>{storageOnline.toFixed(2)}%</span>
              </MonitoringLabel>
              <ProgressBar>
                <Progress value={storageOnline} />
              </ProgressBar>
            </MonitoringInfo>

            <MemorySection>
              <MemoryTitle>Memory (RAM)</MemoryTitle>
              <MemoryDetails>
                <MemoryCircle progress={0.4607}>
                  <svg width="60" height="60">
                    <circle className="bg" cx="30" cy="30" r="27" />
                    <circle className="progress" cx="30" cy="30" r="27" />
                  </svg>
                </MemoryCircle>
                <MemoryInfo>
                  <div>GSkill 2 x 8 GB DDR3 @1333 MHz</div>
                  <div>Allocated: {(memoryUsage.allocated / 1024).toFixed(2)} GB (46.07%)</div>
                  <div>In Cache: {(memoryUsage.inCache / 1024).toFixed(2)} GB (26.73%)</div>
                  <div>Available: {(memoryUsage.available / 1024).toFixed(2)} GB (27.20%)</div>
                </MemoryInfo>
              </MemoryDetails>
            </MemorySection>

            <PingSection>
              <PingLabel>Average ping</PingLabel>
              <PingValue>{Math.round(pingValue)} ms</PingValue>
            </PingSection>
          </Card>

          <Card>
            <CardTitle>Dev Volume Status</CardTitle>
            <VolumeGrid>
              {deviceData.map((device, index) => (
                <VolumeCard key={device.id}>
                  <CircleProgress 
                    progress={volumeUsage[index] / 100} 
                    color={volumeUsage[index] > 80 ? '#F44336' : '#4CAF50'}
                  >
                    <svg width="80" height="80">
                      <circle className="bg" cx="40" cy="40" r="36" />
                      <circle className="progress" cx="40" cy="40" r="36" />
                    </svg>
                  </CircleProgress>
                  <div style={{ color: '#2B1055', marginBottom: '0.25rem' }}>{device.path}</div>
                  <div style={{ color: '#4B2094' }}>{device.capacity.split('/')[1].trim()}</div>
                  <VolumeDetails>
                    <div>Used Space: {device.usedSpace}</div>
                    <div>Free Space: {device.freeSpace}</div>
                  </VolumeDetails>
                </VolumeCard>
              ))}
            </VolumeGrid>
          </Card>
        </MonitoringSection>

        <Card>
          <CardTitle>Mounted Devices</CardTitle>
          <Table>
            <thead>
              <tr>
                <Th>Description</Th>
                <Th>RAID</Th>
                <Th>Path</Th>
                <Th>Capacity</Th>
                <Th>Usage</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              {deviceData.map((device, index) => (
                <tr key={device.id}>
                  <Td>{device.id}</Td>
                  <Td>{device.raid}</Td>
                  <Td>{device.path}</Td>
                  <Td>{device.capacity}</Td>
                  <Td>
                    <ProgressBar style={{ width: '150px' }}>
                      <Progress value={deviceUsage[index]} />
                    </ProgressBar>
                    <span style={{ marginLeft: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                      {deviceUsage[index].toFixed(2)}%
                    </span>
                  </Td>
                  <Td>
                    <StatusIndicator status={device.status}>
                      {device.status}
                    </StatusIndicator>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Container>
    </DeDaSSection>
  );
};

export default DeDaS; 